'use strict'

const Controller = require('egg').Controller
//ctx 是上下文，可以在 ctx 中拿到全局对象 app
class TeacherController extends Controller {
  // 获取信息
  async getTeacherInfo() {
    const { ctx, app } = this
    //获取项目列表，从server当中调取getProject方法
    const result = await ctx.service.teacher.getTeacher()
    
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
  //获取活动详情
  async getDetail() {
    const { ctx, app } = this
    // 获取项目id 参数
    const { id='' } = ctx.query
    //获取项目列表，从server当中调取getProjectDetail方法
    const detail = await ctx.service.teacher.getTeacherDetail(id)
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {    
      code: 200,
      msg: '请求成功',
      data: [
        detail
      ]
       
      
    }
  }
  //修改更新信息
  async editTeacherInfo() {
    const { ctx, app } = this
    // 通过 post 请求，在请求体中获取签名字段 signature
   const {id,teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch} = ctx.request.body
    try {
      // 根据项目id修改项目数据
       await ctx.service.teacher.editTeacher(id,teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch)
       const result = await ctx.service.teacher.getTeacherDetail(id)
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
  //增加
  async addTeacherInfo() {
    const { ctx, app } = this
    const { teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch} = ctx.request.body
    await ctx.service.teacher.addTeacher(teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch)
    const result = await ctx.service.teacher.getTeacher()
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
  //删除
  async deleteTeacherInfo() {
    const { ctx, app } = this
   const {id} = ctx.request.body
    try {
      // 根据项目id删除项目数据
      await ctx.service.teacher.deleteTeacher(id)
      const result = await ctx.service.teacher.getTeacher()
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
module.exports =  TeacherController
