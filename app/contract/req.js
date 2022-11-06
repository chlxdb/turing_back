module.exports = {
    editIntroductionInfoRequest:{
        introductionId: {
            type: 'string',
            require: true,
            description: '简介id',
            example:'user'
        },
        introductionInfo: {
            type: 'string',
            require: true,
            description: '介绍',
            example:'user'
        },
        introductionVideo:{
            type: 'string',
            require: true,
            description: '介绍视频',
            example:'user'
        }
    },
    getDetailRequest:{
        Id: {
            type: 'string',
            require: true,
            description: 'id',
        },    
    },
    deleteLeaderInfoRequest:{
        Id: {
            type: 'string',
            require: true,
            description: 'id',
        }, 
    },
    editLeaderInfoRequest:{
        id: {
            type: 'string',
            require: true,
            description: 'id',
            example:'user'
        },
        incidentTitle: {
            type: 'string',
            require: true,
            description: 'title',
            example:'user'
        },
        incidentContent: {
            type: 'string',
            require: true,
            description: 'content',
            example:'user'
        },
        incidentDate: {
            type: 'string',
            require: true,
            description: '时间',
            example:'user'
        },
        leaderInspectionIncidentPhoto: {
            type: 'string',
            require: false,
            description: '照片',
            example:'user'
        },
    },
    addLeaderInfoRequest:{
        incidentTitle: {
            type: 'string',
            require: true,
            description: 'title',
            example:'user'
        },
        incidentContent: {
            type: 'string',
            require: true,
            description: 'content',
            example:'user'
        },
        incidentDate: {
            type: 'string',
            require: true,
            description: '时间',
            example:'user'
        },
        leaderInspectionIncidentPhoto: {
            type: 'string',
            require: false,
            description: '照片',
            example:'user'
        },
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