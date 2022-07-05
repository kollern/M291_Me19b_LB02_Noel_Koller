const path = require('path')
module.exports = {
    pages: {
        'index': {
            entry: './src/main.js',
            template: 'public/index.html',
            title: 'State in vue'
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set(
            'vue$',
            // If using the runtime only build
            path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
            // Or if using full build of Vue (runtime + compiler)
            // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
        )
    }
}