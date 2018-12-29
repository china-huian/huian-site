const prefix = '/multi/';
module.exports = {
  baseUrl: './',
  // assetsDir: 'static',

  // 多页面应用配置
  // pages: {
  //   index: 'src/pages/index/main.js',
  //   game1: 'src/pages/game1/main.js',
  // },

  // configureWebpack: {
  //   externals: {
  //     vue: 'Vue',
  //   },
  // },

  devServer: {
    open: true,
    host: '192.168.100.2',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: { // 配置跨域
        '/b087y.web': {
　　　　　　　　　　//要访问的跨域的api的域名
            target: 'http://cs.cpcxc.com/b087y.web',
            ws: true,
            changOrigin: true,
            pathRewrite: {
                '^/b087y.web': ''
            }
        }
    },
    before(app) {
      app.use((req, res, next) => {
        console.log(`[${req.method}]`, req.path);
        next();
      });
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: `^${prefix}game1`, to: `${prefix}game1.html` },
        { from: /./, to: '/404.html' },
      ],
    },
  }
}