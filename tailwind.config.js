module.exports = {
    content: [
        './src/**/*.{html,ts}',
    ],
    theme: {
        extend: {
            utilities: {
                '.text-underline': {
                    'text-decoration': 'underline',
                },
            },
            colors: {
                'primary-500': '#D6AB51',
                'dark-500': '#111827',
                'dark-300': '#374151'
            },
            maxWidth: {
                'content': '64.0625rem',
            },
            fontSize: {
                title: '2.5rem',
                normal: '1rem',
                xsmall:'0.75rem',
                small: '0.875rem',
                large: '1.875rem',
                subTitle: '1.5625rem'
            }
        },




    },
    plugins: [],
}
