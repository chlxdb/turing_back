//  service/user.js
// 'use strict'
// const Service = require('egg').Service
// class UserService extends Service {
//   // 通过用户名获取用户信息
//   async getUserByName(username) {
//     const { app } = this
//     try {
//       const result = await app.mysql.get('user', { username })
//       return result
//     } catch (error) {
//       console.log(error)
//       return null
//     }
//   }
//   // 注册
//   async register(params) {
//     const { app } = this
//     try {
//       const result = await app.mysql.insert('user', params)
//       return result
//     } catch (error) {
//       console.log(error)
//       return null
//     }
//   }
//   // 修改用户信息
//   async editUserInfo() {
//     const { ctx, app } = this
//     // 通过 post 请求，在请求体中获取签名字段 signature
//     const { signature = '', avatar = '' } = ctx.request.body

//     try {
//       let user_id
//       const token = ctx.request.header.authorization
//       const decode = await app.jwt.verify(token, app.config.jwt.secret)
//       if (!decode) return
//       user_id = decode.id

//       const userInfo = await ctx.service.user.getUserByName(decode.username)
//       const result = await ctx.service.user.editUserInfo({
//         ...userInfo,
//         signature,
//         avatar,
//       })

//       ctx.body = {
//         code: 200,
//         msg: '修改成功',
//         data: {
//           id: user_id,
//           signature,
//           username: userInfo.username,
//           avatar,
//         },
//       }
//     } catch (error) {}
//   }
// }
// module.exports = UserService
