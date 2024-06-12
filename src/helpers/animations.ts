import { Ref } from 'vue'

export function snapScroll(container: Ref<HTMLElement | null>): void {
	if (!container.value) return

	const scrollPosition: number = container.value.scrollTop
	const containerHeight: number = container.value.clientHeight
	const snapPoints: NodeListOf<HTMLElement> =
		container.value.querySelectorAll('.snap-always')

	// Find the closest snap point
	let minDistance: number = Infinity
	let closestSnapIndex: number = 0

	snapPoints.forEach((snapPoint, index) => {
		const snapTop: number = snapPoint.offsetTop
		const snapBottom: number = snapTop + snapPoint.clientHeight // Calculate the bottom edge
		const distance: number = Math.abs(
			snapTop - scrollPosition + containerHeight / 2
		)

		if (
			distance < minDistance &&
			scrollPosition >= snapTop &&
			scrollPosition <= snapBottom
		) {
			// Check if the scroll position is within the snap point
			minDistance = distance
			closestSnapIndex = index
		}
	})

	// Scroll to the closest snap point smoothly
	const closestSnapPoint: HTMLElement = snapPoints[closestSnapIndex]
	container.value.scrollTo({
		top: closestSnapPoint.offsetTop,
		behavior: 'smooth',
	})
}
