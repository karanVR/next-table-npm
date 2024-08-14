const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            boxShadow: {
                'custom-top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.1)',
            },
            transitionProperty: {
                height: 'height',
            },
            fontFamily: {
                SamsungSharpSans: ['SamsungSharpSans'],
                Samsungone: ['Samsungone'],
            },
            colors: {
                accent: '#217AFF',
                'yellow-1': '#FFF8E3',
                'yellow-2': '#F8C108',
                'green-1': '#429F6E',
                dark: '#000000',
                'gray-1': '#58595B',
                'gray-2': '#7E7E7E',
                'border-1': '#ADADAD',
                'border-2': '#D0D0D0',
                'bg-1': '#F7F7F7',
                'blue-bg-1': '#EBEFFF',
                'blue-bg-2': '#F4F6FF',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'slide-in-right': {
                    from: { right: '-100%' },
                    to: { right: '0%' },
                },
                'slide-in-bottom': {
                    from: { transform: 'scaleY(0)' },
                    to: { transform: 'scaleY(1)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'slide-in-right': 'slide-in-right 300ms cubic-bezier(0.4, 0, 0.6, 1)',
                'slide-in-bottom': 'slide-in-bottom 200ms cubic-bezier(0.4, 0, 0.6, 1)',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
//# sourceMappingURL=tailwind.config.js.map