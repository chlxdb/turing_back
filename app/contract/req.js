module.exports = {
    editIntroductionInfoRequest:{
        introductionId: {
            type: 'string',
            require: true,
            description: '用户名',
            example:'user'
        },
        introductionInfo: {
            type: 'string',
            require: true,
            description: '用户名',
            example:'user'
        },
        introductionVideo:{
            type: 'string',
            require: true,
            description: '用户名',
            example:'user'
        }
    },
    registerRequest: {
        username: {
            type: 'string',
            require: true,
            description: '用户名',
            example:'user'
        },
        password: {
            type: 'string',
            require: true,
            description: '用户名',
            example:'user'
        }
    },
    loginRequest: {
        username: {
            type: 'string',
            require: true,
            description: '用户名',
            example:'users'
        },
        password: {
            type: 'string',
            require: true,
            description: '用户名',
            example:'users'
        }
    }
}