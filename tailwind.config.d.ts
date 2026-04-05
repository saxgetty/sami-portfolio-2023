declare const _default: {
    content: string[];
    theme: {
        extend: {
            colors: {
                paper: string;
                ink: string;
                cocoa: string;
                sage: string;
                forest: string;
                coral: string;
                marigold: string;
                terracotta: string;
                sky: string;
            };
            fontFamily: {
                sans: [string, string];
                display: [string, string];
                title: [string, string];
                mono: [string, string];
                fredoka: [string, string, string];
            };
            animation: {
                float: string;
                'pulse-slow': string;
                'gradient-shift': string;
            };
            keyframes: {
                float: {
                    '0%, 100%': {
                        transform: string;
                    };
                    '50%': {
                        transform: string;
                    };
                };
                'gradient-shift': {
                    '0%, 100%': {
                        backgroundPosition: string;
                        backgroundSize: string;
                    };
                    '50%': {
                        backgroundPosition: string;
                        backgroundSize: string;
                    };
                };
            };
        };
    };
    plugins: import("tailwindcss/types/config").PluginCreator[];
    daisyui: {
        themes: {
            sami: {
                primary: string;
                secondary: string;
                accent: string;
                neutral: string;
                'base-100': string;
                'base-200': string;
                'base-300': string;
                info: string;
                success: string;
                warning: string;
                error: string;
            };
        }[];
        darkTheme: string;
        base: boolean;
        styled: boolean;
        utils: boolean;
        prefix: string;
        logs: boolean;
        themeRoot: string;
    };
};
export default _default;
