'use strict'
const Controller = require('egg').Controller

/**
 * @Controller 简介信息
 */
  
class IntroductionController extends Controller {
 
/**
   * @summary 获取简介
   * @description 根据组别获取负责人信息
   * @router get /api/introduction/getIntroductionInfo
   */
  
  // 获取介绍信息
  async getIntroductionInfo() {
    const { ctx, app } = this
    const result = await ctx.service.introduction.getIntroduction()
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: result,
    }
  }
  /**
   * @summary 更新简历
   * @description 嘻嘻嘻
   * @router post /api/introduction/editIntroductionInfo
   * @Request body string *
   */
  //修改更新介绍信息
  async editIntroductionInfo() {
    const { ctx, app } = this
    const { introductionId, introductionInfo, introductionVideo } = ctx.request.body
    try {
      // 根据id修改数据
      await ctx.service.introduction.editIntroduction(introductionId, introductionInfo, introductionVideo)
      const result = await ctx.service.introduction.getIntroduction()
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
module.exports = IntroductionController
