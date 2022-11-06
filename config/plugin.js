'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 配置 egg-swagger-doc 插件信息。
  swaggerdoc: {
    enable: true, // 是否启用
    package: 'egg-swagger-doc' // 指定包名称
  }

}



