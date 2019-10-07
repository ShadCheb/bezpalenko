module.exports = {
    pages: {
        'index': {
            entry: './src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
            /* title: 'Home',
            chnks: ['chunk-vendors', 'chunk-common', 'index'] */
        },
        'pages': {
            entry: './src/main-pages.js',
            template: 'public/pages.html',
            filename: 'pages.html'
            /* title: 'Pages',
            chnks: ['chunk-vendors', 'chunk-common', 'pages'] */
        }
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /\/index/, to: '/index.html' },
                { from: /\/pages/, to: '/pages.html' }
            ]
        }
    },
}