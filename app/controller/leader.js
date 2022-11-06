'use strict'
/**
 * @Controller 领导信息操作
 */
const Controller = require('egg').Controller
//ctx 是上下文，可以在 ctx 中拿到全局对象 app
class LeaderController extends Controller {
  /**
   * @summary 获取视察信息
   * @description 直接获取信息
   * @router get /api/leader/getLeaderInfo
   */
  // 获取信息
  async getLeaderInfo() {
    const { ctx, app } = this
    //获取项目列表，从server当中调取getProject方法
    const result = await ctx.service.leader.getLeader()
    
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
/**
   * @summary 获取详情
   * @description 通过id
   * @router get /api/leader/Leaderdetail
   * @Request query integer *id
   */
  //获取详情
  async getDetail() {
    const { ctx, app } = this
    // 获取项目id 参数
    const { id='' } = ctx.query
    //获取项目列表，从server当中调取getProjectDetail方法
    const detail = await ctx.service.leader.getLeaderDetail(id)
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {    
      code: 200,
      msg: '请求成功',
      data: [
        detail
      ]
       
      
    }
  }
   /**
   * @summary 更新视察信息
   * @description 修改更新
   * @router post /api/leader/editLeaderInfo
   * @Request body string *
   */
  //修改更新信息
  async editLeaderInfo() {
    const { ctx, app } = this
    // 通过 post 请求，在请求体中获取签名字段 signature
   const {id,incidentTitle,incidentContent,incidentDate,leaderInspectionIncidentPhoto} = ctx.request.body
    try {
      // 根据项目id修改数据
       await ctx.service.leader.editLeader(id,incidentTitle,incidentContent,incidentDate,leaderInspectionIncidentPhoto)
       const result = await ctx.service.leader.getLeaderDetail(id)
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
   * @router post /api/leader/addLeaderInfo
   * @Request body string *
   */
  //增加
  async addLeaderInfo() {
    const { ctx, app } = this
    const { incidentTitle,incidentContent,incidentDate,leaderInspectionIncidentPhoto } = ctx.request.body
    await ctx.service.leader.addLeader(incidentTitle,incidentContent,incidentDate,leaderInspectionIncidentPhoto)
    const result = await ctx.service.leader.getLeader()
    // 所以我们指定从数据库获取的数据返回给客户端
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
   /**
   * @summary 删除视察信息
   * @description 删除
   * @router post /api/leader/deleteLeaderInfo
   * @Request body integer *id
   */
  //删除
  async deleteLeaderInfo() {
    const { ctx, app } = this
   const {id} = ctx.request.body
    try {
      // 根据项目id删除数据
      await ctx.service.leader.deleteLeader(id)
      const result = await ctx.service.leader.getLeader()
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
module.exports =  LeaderController
