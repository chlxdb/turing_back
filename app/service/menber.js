'use strict'
const Service = require('egg').Service
class MenberService extends Service {
  //获取
  async getMenber() {
    const { app } = this
    try {
      const result = await app.mysql.query('select * from menber')
      // const total = await app.mysql.count('menber');
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
 
  async getDirection(direction) {
    const { app } = this
    try {
      const result = await app.mysql.select('menber',{where:{direction} })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //编辑更新列表
  async editMenber(id,direction,name,icon,major,introduction) {
    const {ctx, app } = this
    try {
      const result = await app.mysql.update(
        'menber',
         {direction,name,icon,major,introduction},
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
  async addMenber(direction,name,icon,major,introduction) {
    const { app } = this
    try {
      const result = await app.mysql.insert('menber', {direction,name,icon,major,introduction})
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
      const result = await app.mysql.delete('menber', { id })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
}
}
module.exports = MenberService