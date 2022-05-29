const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,
    chainWebpack: config => {
        // 移除 prefetch 插件,解决组件懒加载失效的问题
        config.plugins.delete('prefetch')
        // 添加新的svg-sprite-loader处理svgIcon
        config.module
            .rule('svgIcon')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .tap(options => {
                options = {
                    symbolId: 'icon-[name]'
                }
                return options
            })

        // 原有的svg图像处理loader添加exclude
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
    },
    devServer: {
        disableHostCheck: true,
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        // eslint-disable-next-line no-dupe-keys
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    }
}
