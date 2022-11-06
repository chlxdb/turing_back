
'use strict'


const fs = require('fs')
const moment = require('moment')
const mkdirp = require('mkdirp')
const path = require('path')

const Controller = require('egg').Controller
class UploadController extends Controller {
  async upload() {
    const { ctx } = this
    // 需要前往 config/config.default.js 设置 config.multipart 的 mode 属性为 file
    let file = ctx.request.files[0]
    // 声明存放资源的路径
    let uploadDir = ''
    try {
      // ctx.request.files[0] 表示获取第一个文件，若前端上传多个文件则可以遍历这个数组对象
      let f = fs.readFileSync(file.filepath)
      // 1.获取当前日期
      let day = moment(new Date()).format('YYYYMMDD')
      // 2.创建图片保存的路径
      let dir = path.join(this.config.uploadDir, day)
      let date = Date.now() // 毫秒数
      await mkdirp(dir) // 不存在就创建目录
      // 返回图片保存的路径=目录+文件名
      //获取路径：path.dirname(filepath)
      // 获取文件名：path.basename(filename)
      // 获取扩展名：path.extname(filepath)
      uploadDir = path.join(dir, date + path.extname(file.filename))
      // 写入文件夹
      fs.writeFileSync(uploadDir,f)
      //path.join在windows系统上用的文件分隔符是\ 所以会出现返回路径双斜杠的问题，加一行代码在转化一下就行了
      uploadDir = uploadDir.split(path.sep).join('/')
    } finally {
      // 清除临时文件
      ctx.cleanupRequestFiles()
    }
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data:uploadDir.replace('/app', ''),
    }
  }
}

module.exports = UploadController
