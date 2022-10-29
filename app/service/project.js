'use strict'

const Service = require('egg').Service
class ProjectService extends Service {
  //获取项目列表
  async getProject() {
    const { app } = this
    try {
      const result = await app.mysql.query('select * from project', '')
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过项目id获取项目详情
  async getProjectDetail(projectId) {
    const { app } = this
    try {
      const result = await app.mysql.get('project', { projectId })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //编辑更新项目列表
  async editProject(projectId,projectContent,projectName,projectGif,projectPhotos) {
    const {ctx, app } = this
    try {
      const result = await app.mysql.update(
        'project',
         {projectContent,projectName,projectGif,projectPhotos},
        {
          where: {
            projectId,
          } 
        }
      )
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //增加项目列表
  async addProject(projectName,projectContent) {
    const { app } = this
    try {
      const result = await app.mysql.insert('project', {projectName,projectContent})
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }
  //通过id删除项目
  async deleteProject(projectId) {
    const { app } = this
    try {
      const result = await app.mysql.delete('project', { projectId })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
}
}
module.exports = ProjectService
