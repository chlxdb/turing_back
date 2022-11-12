/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  const config = (exports = {})



  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1665577664020_9414'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload',
  }
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'], // 配置白名单
  }
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.98.54.132',
      // 端口号
      port: '3306',
      // 用户名
      user: 'tring-backdata',
      // 密码
      password: '7ChZfjJH6Xn7RnKT', // Window 用户如果没有密码，可不填写
      // 数据库名
      database: 'tring-backdata',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  config.view = {
    mapping: { '.html': 'ejs' }, //左边写成.html后缀，会自动渲染.html文件
  }
  config.jwt = {
    secret: 'Nick',
  }
  config.multipart = {
    mode: 'file',
  }
  config.cors = {
    origin: '*', // 允许所有跨域访问
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  }
  // {app_root}/config/config.default.js

  config.swaggerdoc = {
    dirScanner: './app/controller', 
    apiInfo: {
      title: 'document', 
      description: 'swagger', 
      version: '1.0.0', 
    },
   
    schemes: ['http', 'https'], 
    consumes: ['application/json'], 
    produces: ['application/json'], 
    enableSecurity: false, 
    routerMap: false, 
    enable: true   
  }
  
  return {
    ...config,
    ...userConfig,
  }
}
