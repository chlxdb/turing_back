'use strict'
/**
 * @Controller 团队活动操作
 */
const Controller = require('egg').Controller
//ctx 是上下文，可以在 ctx 中拿到全局对象 app
class LiveController extends Controller {
  /**
   * @summary 获取活动信息
   * @description 直接获取信息
   * @router get /api/live/getLiveInfo
   */
  // 获取信息
  async getLiveInfo() {
    const { ctx, app } = this
    const result = await ctx.service.live.getLive()
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
   * @router get /api/live/Livedetail
   * @Request query integer *id
   */
  //获取活动详情
  async getDetail() {
    const { ctx, app } = this
    // 获取项目id 参数
    const { id='' } = ctx.query
    //获取项目列表，从server当中调取getProjectDetail方法
    const detail = await ctx.service.live.getLiveDetail(id)
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
   * @summary 更新活动信息
   * @description 修改更新
   * @router post /api/live/editLiveInfo
   * @Request body string *
   */
  //修改更新信息
  async editLiveInfo() {
    const { ctx, app } = this
    // 通过 post 请求，在请求体中获取签名字段 signature
   const {id,liveName,liveContent} = ctx.request.body
    try {
      // 根据项目id修改项目数据
       await ctx.service.live.editLive(id,liveName,liveContent)
       const result = await ctx.service.live.getLiveDetail(id)
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
   * @summary 添加活动信息
   * @description 添加
   * @router post /api/live/addLiveInfo
   * @Request body string *
   */
  //增加
  async addLiveInfo() {
    const { ctx, app } = this
    const { liveName,liveContent } = ctx.request.body
    await ctx.service.live.addLive(liveName,liveContent)
    const result = await ctx.service.live.getLive()
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
   * @router post /api/live/deleteLiveInfo
   * @Request body integer *id
   */
  //删除
  async deleteLiveInfo() {
    const { ctx, app } = this
   const {id} = ctx.request.body
    try {
      // 根据id删除数据
      await ctx.service.live.deleteLive(id)
      const result = await ctx.service.live.getLive()
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
module.exports =  LiveController
