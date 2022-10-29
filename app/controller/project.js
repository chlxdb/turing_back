'use strict'
const Controller = require('./base');
// const Controller = require('egg').Controller
//ctx 是上下文，可以在 ctx 中拿到全局对象 app
class ProjectController extends Controller {
  // 获取项目信息
  async getProjectInfo() {
    const { ctx, app } = this
    //获取项目列表，从server当中调取getProject方法
    const projectInfo = await ctx.service.project.getProject()
    
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: projectInfo,
    }
  }
  //获取项目详情
  async getDetail() {
    const { ctx, app } = this
    // 获取项目id 参数
    const { projectId='' } = ctx.query
    console.log(projectId)
    //获取项目列表，从server当中调取getProjectDetail方法
    const detail = await ctx.service.project.getProjectDetail(projectId)
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {    
      code: 200,
      msg: '请求成功',
      data: [
        detail
      ]
       
      
    }
  }
  //修改更新项目信息
  async editProjectInfo() {
    const { ctx, app } = this
    // 通过 post 请求，在请求体中获取签名字段 signature
   const {projectId,projectContent,projectName,projectGif,projectPhotos} = ctx.request.body
    // 判空处理
    // if (!projectId || !projectContent || !projectName) {
    //   ctx.body = {
    //     code: 400,
    //     msg: '参数错误',
    //     data: null,
    //   }
    // }
    try {
      // 根据项目id修改项目数据
       await ctx.service.project.editProject(projectId,projectContent,projectName,projectGif,projectPhotos)
       const result = await ctx.service.project.getProjectDetail(projectId)
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
  //增加项目
  async addProjectInfo() {
    const { ctx, app } = this
    const { projectName,projectContent } = ctx.request.body
    await ctx.service.project.addProject(projectName,projectContent)
    const result = await ctx.service.project.getProject()
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
  //删除项目
  async deleteProjectInfo() {
    const { ctx, app } = this
    // 通过 post 请求，在请求体中获取字段 projectId
   const {projectId} = ctx.request.body
    try {
      // 根据项目id删除项目数据
      await ctx.service.project.deleteProject(projectId)
      const result = await ctx.service.project.getProject()
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
module.exports = ProjectController
