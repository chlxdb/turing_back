'use strict'
const Service = require('egg').Service
class ResumeService extends Service {
  //获取
  async getResume(type) {
    const { app } = this
    try {
      const result = await app.mysql.select('resume',{where:{type} })
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //编辑更新列表
  async editResume(id,type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others) {
    const {ctx, app } = this
    try {
      const result = await app.mysql.update(
        'resume',
         {type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others},
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
  async addResume(type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others) {
    const { app } = this
    try {
      const result = await app.mysql.insert('resume', {type,name,code,cla,direction,phone,Evaluation,Skills,Expectation,Experience,Others})
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id删除
  async deleteMenebr(id) {
    const { app } = this
    try {
      const result = await app.mysql.delete('resume', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
}
}
module.exports = ResumeService