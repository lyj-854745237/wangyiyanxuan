const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
    remUnit: 75   
})

module.exports = {
    runtimeCompiler: true,
    lintOnSave: false, 
    css: { 
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss,
                    // vant的适配
                    px2rem({
                        remUnit: 75,
                        propList: ['*'],
                    })
            
                ]
            }
        }
    },
    configureWebpack:{
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
                'store': resolve('src/store'),
            }
        }
    },
    devServer:{
        open:true,
        proxy:{
            '/3001': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                pathRewrite:{
                    "^/3001":""
                }
            },
            '/api': {
                target: 'https://m.you.163.com',
                changeOrigin: true,
                secure:false,
                pathRewrite:{
                    "^/api":""
                }
            }
        },
        
    }
}

