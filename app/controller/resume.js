'use strict'
/**
 * @Controller 团队简历操作
 */
const Controller = require('egg').Controller
//ctx 是上下文，可以在 ctx 中拿到全局对象 app
class ResumeController extends Controller {
  /**
   * @summary 获取简历信息
   * @description 通过direction信息
   * @router get /api/resume/getResume
   * @Request query string *direction
   */
  // 获取信息
  async getResumeInfo() {
    const { ctx, app } = this
    const { direction='' } = ctx.query
    const result = await ctx.service.resume.getResume(direction)
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
 /**
   * @summary 更新简历信息
   * @description 修改更新
   * @router post /api/resume/editResume
   * @Request body string *
   */
  //修改更新信息
  async editResumeInfo() {
    const { ctx, app } = this
    // 通过 post 请求，在请求体中获取签名字段 signature
   const {id,type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others} = ctx.request.body
    try {
      // 根据项目id修改项目数据
       await ctx.service.Resume.editResume(id,type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others)
       const result = await ctx.service.Resume.getResume()
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: result,
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '系统错误',
        data: null,
      }
    }
  }
   /**
   * @summary 添加项目信息
   * @description 添加
   * @router post /api/resume/addResume
   * @Request body string *
   */
  //增加
  async addResumeInfo() {
    const { ctx, app } = this
    const { type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others} = ctx.request.body
    await ctx.service.teacher.addResume(type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others)
    const result = await ctx.service.Resume.getResume()
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
   /**
   * @summary 删除活动信息
   * @description 删除
   * @router post /api/resume/deleteResume
   * @Request body integer *id
   */
  //删除
  async deleteResumeInfo() {
    const { ctx, app } = this
   const {id} = ctx.request.body
    try {
      // 根据项目id删除项目数据
      await ctx.service.Resume.deleteResume(id)
      const result = await ctx.service.Resume.getResume()
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: result,
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '系统错误',
        data: null,
      }
    }
    }
}
module.exports =  ResumeController
