'use strict'
const Service = require('egg').Service
class LiveService extends Service {
  //获取
  async getLive() {
    const { app } = this
    try {
      const result = await app.mysql.query('select * from live', '')
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id获取详情
  async getLiveDetail(id) {
    const { app } = this
    try {
      const result = await app.mysql.get('live', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //编辑更新列表
  async editLive(id,liveName,liveContent) {
    const {ctx, app } = this
    try {
      const result = await app.mysql.update(
        'live',
         {liveName,liveContent},
        {
          where: {
           id,
          } 
        }
      )
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //增加列表
  async addLive(liveName,liveContent) {
    const { app } = this
    try {
      const result = await app.mysql.insert('live', {liveName,liveContent})
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id删除
  async deleteLive(id) {
    const { app } = this
    try {
      const result = await app.mysql.delete('live', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
}
}
module.exports = LiveService
