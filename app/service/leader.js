'use strict'
const Service = require('egg').Service
class LeaderService extends Service {
  //获取
  async getLeader() {
    const { app } = this
    try {
      const result = await app.mysql.query('select * from leader', '')
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id获取详情
  async getLeaderDetail(id) {
    const { app } = this
    try {
      const result = await app.mysql.get('leader', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //编辑更新列表
  async editLeader(id,liveName,liveContent) {
    const {ctx, app } = this
    try {
      const result = await app.mysql.update(
        'leader',
         {incidentTitle,incidentContent,incidentDate,leaderInspectionIncidentPhoto},
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
  async addLeader(incidentTitle,incidentContent,incidentDate,leaderInspectionIncidentPhoto) {
    const { app } = this
    try {
      const result = await app.mysql.insert('leader', {incidentTitle,incidentContent,incidentDate,leaderInspectionIncidentPhoto})
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id删除
  async deleteLeader(id) {
    const { app } = this
    try {
      const result = await app.mysql.delete('leader', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
}
}
module.exports = LeaderService