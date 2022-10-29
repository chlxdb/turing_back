'use strict'
const Service = require('egg').Service
class TeacherService extends Service {
  //获取
  async getTeacher() {
    const { app } = this
    try {
      const result = await app.mysql.query('select * from teacher', '')
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id获取详情
  async getTeacherDetail(id) {
    const { app } = this
    try {
      const result = await app.mysql.get('teacher', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //编辑更新列表
  async editTeacher(id,teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch) {
    const {ctx, app } = this
    try {
      const result = await app.mysql.update(
        'teacher',
         {teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch},
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
  async addTeacher(teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch) {
    const { app } = this
    try {
      const result = await app.mysql.insert('teacher', {teacherName,teacherJob,teacherGraduation,teacherBorn,teacherEmail,teacherAwardIntroduction,teacherResearch})
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id删除
  async deleteTeacher(id) {
    const { app } = this
    try {
      const result = await app.mysql.delete('teacher', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
}
}
module.exports = TeacherService