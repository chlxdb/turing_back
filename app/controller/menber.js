'use strict'

const Controller = require('egg').Controller
//ctx 是上下文，可以在 ctx 中拿到全局对象 app
class MeneberController extends Controller {
  // 获取信息
  async getMenberInfo() {
    const { ctx, app } = this
    //  const {page='',pagesize='' } = ctx.query
    //  //每页显示多少 count 页
    //  const offset= (page - 1) * pagesize //从第几条起
    
    const result = await ctx.service.menber.getMenber()
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
  //获取方向
  async getDirection() {
    const { ctx, app } = this
    // 获取项目id 参数
    const { direction='' } = ctx.query
    //获取项目列表，从server当中调取getProjectDetail方法
    const detail = await ctx.service.menber.getDirection(direction)
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
  async editMenebrInfo() {
    const { ctx, app } = this
    // 通过 post 请求，在请求体中获取签名字段 signature
   const {id,direction,name,icon,major,introduction} = ctx.request.body
    try {
      // 根据项目id修改项目数据
       await ctx.service.menber.editMenber(id,direction,name,icon,major,introduction)
       const result = await ctx.service.menber.getMenber()
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
  async addMenebrInfo() {
    const { ctx, app } = this
    const { direction,name,icon,major,introduction} = ctx.request.body
    await ctx.service.menber.addMenber(direction,name,icon,major,introduction)
    const result = await ctx.service.menber.getMenber()
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
  //删除
  async deleteMenebrInfo() {
    const { ctx, app } = this
   const {id} = ctx.request.body
    try {
      // 根据项目id删除项目数据
      await ctx.service.menber.deleteMenber(id)
      const result = await ctx.service.menber.getMenber()
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
module.exports =  MeneberController
