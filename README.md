





### swagger 插件配置

```
// {app_root}/config/plugin.js
exports.swaggerdoc = {
  enable: true, // 是否启用
  package: 'egg-swagger-doc' // 指定包名称
}


// {app_root}/config/config.default.js
exports.swaggerdoc = {
  dirScanner: './app/controller', // 配置自动扫描的控制器路径
  apiInfo: {
    title: '接口文档', // 接口文档的标题
    description: 'swagger 测试接口文档', // 接口文档描述
    version: '1.0.0', // 接口文档版本
  },
  schemes: ['http', 'https'], // 配置支持的协议
  consumes: ['application/json'],
  produces: ['application/json'], 
  enableSecurity: false, // 是否启用授权，默认 false
  routerMap: false, // 是否启用自动生成路由(实验功能)，默认 true
  enable: true   // 默认 true
}
```

### 注释参数编写

controller 为 api 的控制器，而 contract 下的文件为定义好的请求体和响应体。

控制器的注释分两块，

每个控制器的第一个注释块必须包含 @controller 才能被解析为控制器

然后会逐个解析出控制器下包含的 api 注释。

1.在app根目录添加一个contract文件夹，如果不添加直接运行会出错，





## 参数说明

swagger 有以下常用的注释：

```js
@Controller {ControllerName}
@Router {Mothod} {Path}
@Request {Position} {Type} {Name} {Description}
@Response {HttpStatus} {Type} {Description}
@Deprecated
@Description {Description}
@Summary {Summary}
```





写完后运行 npm run dev  后打开 http://127.0.0.1:7001/swagger-ui.html