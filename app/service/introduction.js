'use strict'

const Service = require('egg').Service
class IntroductionService extends Service {
  //获取介绍列表
  async getIntroduction() {
    const { app } = this
    try {
      const result = await app.mysql.query('select * from introduction', '')
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async editIntroduction(introductionId,introductionInfo,introductionVideo) {
    const {ctx, app } = this
    try {
      const result = await app.mysql.update(
        'introduction',
         {introductionInfo,introductionVideo},
        {
          where: {
            introductionId,
          } 
        }
      )
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

}
module.exports = IntroductionService
