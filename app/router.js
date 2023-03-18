'use strict'


module.exports = (app) => {
  const { router, controller} = app
  // const { router, controller, middleware } = app
  // const _jwt = middleware.jwtErr(app.config.jwt.secret) // 传入加密字符串
  // router.post('/api/user/register', controller.user.register)
  // router.post('/api/user/login', controller.user.login)
  // router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo) // 获取用户信息
  // router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo) // 修改用户个性签名
  router.post('/api/upload', controller.upload.upload) //上传
  //团队简介操作
  router.get('/api/introduction/getIntroductionInfo', controller.introduction.getIntroductionInfo)//简介获取
  router.post('/api/introduction/editIntroductionInfo', controller.introduction.editIntroductionInfo) //简介修改即删除即添加
  //项目操作
  router.get('/api/project/getProjectInfo', controller.project.getProjectInfo) // 获取项目数据
  router.get('/api/project/detail', controller.project.getDetail) // 获取项目详情
  router.post('/api/project/editProjectInfo', controller.project.editProjectInfo) // 编辑项目数据
  router.post('/api/project/addProjectInfo', controller.project.addProjectInfo) // 添加项目数据
  router.post('/api/project/deleteProjectInfo', controller.project.deleteProjectInfo) // 删除项目数据
  //活动操作
  router.get('/api/live/getLiveInfo', controller.live.getLiveInfo) // 获取活动数据
  router.get('/api/live/Livedetail', controller.live.getDetail) // 获取活动详情
  router.post('/api/live/editLiveInfo', controller.live.editLiveInfo) // 编辑活动数据
  router.post('/api/live/addLiveInfo', controller.live.addLiveInfo) // 添加活动数据
  router.post('/api/live/deleteLiveInfo', controller.live.deleteLiveInfo) // 删除活动数据
  //荣誉操作

  //领导视察
  router.get('/api/leader/getLeaderInfo', controller.leader.getLeaderInfo) // 获取视察数据
  router.get('/api/leader/Leaderdetail', controller.leader.getDetail) // 获取视察详情
  router.post('/api/leader/editLeaderInfo', controller.leader.editLeaderInfo) // 编辑视察数据
  router.post('/api/leader/addLeaderInfo', controller.leader.addLeaderInfo) // 添加视察数据
  router.post('/api/leader/deleteLeaderInfo', controller.leader.deleteLeaderInfo) // 删除视察数据
  //指导老师
  router.get('/api/teacher/getTeacherInfo', controller.teacher.getTeacherInfo) // 获取老师数据
  router.get('/api/teacher/Teacherdetail', controller.teacher.getDetail) // 获取老师详情
  router.post('/api/teacher/editTeacherInfo', controller.teacher.editTeacherInfo) // 编辑老师数据
  router.post('/api/teacher/addTeacherInfo', controller.teacher.addTeacherInfo) // 添加老师数据
  router.post('/api/teacher/deleteTeacherInfo', controller.teacher.deleteTeacherInfo) // 删除老师数据
  //团队学生（分方向，分页查询）
  router.get('/api/menber/getMenber', controller.menber.getMenberInfo) // 获取成员
  router.get('/api/menber/getDirection', controller.menber.getDirection) // 按方向获取
  router.post('/api/menber/editMenber', controller.menber.editMenebrInfo) // 改
  router.post('/api/menber/addMenber', controller.menber.addMenebrInfo) // 增
  router.post('/api/menber/deleteMenber', controller.menber.deleteMenebrInfo) // 删
  //团队通告
  //加入我们（创业组、创业组内容填写，依据学号查询简历内容,改进，面试简历模板下载，打印，提交）
  router.get('/api/resume/getResume', controller.resume.getResumeInfo) // 获取数据（创业组，创新组）
  router.post('/api/resume/addResume', controller.resume.addResumeInfo) // 提交简历（增）
  router.post('/api/resume/deleteResume', controller.resume.deleteResumeInfo) // 删
  router.post('/api/resume/editResume', controller.resume.editResumeInfo) // 改
}
