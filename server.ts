import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'
import axios from 'axios'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables
dotenv.config()

const app = express()
const PORT: number = parseInt(process.env.PORT || '3001')

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://sami-saxton-getty.netlify.app/'],
  credentials: true
}))

app.use(express.json())

// Etsy API configuration
const ETSY_API_KEY: string = process.env.ETSY_API_KEY as string
const SHOP_ID: string = 'saxfreelances'

// Etsy API response interfaces
interface EtsyImage {
  url_75x75: string
  url_170x135: string
  url_570xN: string
}

interface EtsyListing {
  listing_id: number
  title: string
  description: string
  price: {
    amount: number
    divisor: number
    currency_code: string
  }
  url: string
  images: EtsyImage[]
  state: string
  quantity: number
  tags: string[]
}

interface EtsyApiResponse {
  results: EtsyListing[]
  count: number
  pagination: {
    effective_limit: number
    effective_offset: number
    next_offset: number
    effective_page: number
    next_page: number
  }
}

// Proxy endpoint for Etsy shop listings
app.get('/api/etsy/listings', async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get<EtsyApiResponse>(
      `https://openapi.etsy.com/v3/application/shops/${SHOP_ID}/listings/active`,
      {
        params: {
          limit: 6,
          includes: 'images'
        },
        headers: {
          'x-api-key': ETSY_API_KEY
        }
      }
    )
    
    res.json(response.data)
  } catch (error: any) {
    console.error('Etsy API Error:', error.response?.data || error.message)
    res.status(500).json({ 
      error: 'Failed to fetch Etsy listings',
      message: error.response?.data || error.message
    })
  }
})

// Health check endpoint
app.get('/api/health', (req: Request, res: Response): void => {
  res.json({ status: 'ok', message: 'Etsy proxy server is running' })
})

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(PORT, (): void => {
  console.log(`🚀 Etsy proxy server running on port ${PORT}`)
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/etsy/listings`)
  console.log(`💡 Health check: http://localhost:${PORT}/api/health`)
}) 