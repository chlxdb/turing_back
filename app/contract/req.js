module.exports = {
    editIntroductionInfoRequest:{
        introductionId: {
            type: 'integer',
            require: true,
            description: '简介id',
            example:'0'
        },
        introductionInfo: {
            type: 'string',
            require: false,
            description: '介绍',
            example:'user'
        },
        introductionVideo:{
            type: 'string',
            require:false,
            description: '介绍视频',
            example:'user'
        }
    },
    
    editLeaderInfoRequest:{
        id: {
            type: 'integer',
            require: true,
            description: 'id',
            example:0
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
            type: 'integer',
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
    deleteLeaderInfoRequest:{
        Id: {
            type: 'integer',
            require: true,
            description: 'id',
            example:0
        }, 
    },
    editProjectInfoRequest:{
        projectId: {
            type: 'integer',
            require: true,
            description: ' projectId',
            example: 0
        },
        projectContent: {
            type: 'string',
            require: false,
            description: 'projectContent',   
            example:'user'
        },
        projectName: {
            type: 'string',
            require: false,
            description: 'projectName',  
            example:'user'   
        },
        projectGif: {
            type: 'string',
            require: false,
            description: 'projectGif', 
            example:'user'
        },
        projectPhotos: {
            type: 'string',
            require: false,
            description: ' projectPhotos',
            example:'user'
        }
    },
    addProjectInfoRequest:{
        projectContent: {
            type: 'string',
            require: false,
            description: 'projectContent',   
            example:'user'
        },
        projectName: {
            type: 'string',
            require: false,
            description: 'projectName',  
            example:'user'   
        },
        projectGif: {
            type: 'string',
            require: false,
            description: 'projectGif', 
            example:'user'
        },
        projectPhotos: {
            type: 'string',
            require: false,
            description: ' projectPhotos',
            example:'usersacd'
        }
    },
    deleteProjectInfoRequest:{
        projectId: {
            type: 'integer',
            require: true,
            description: ' projectId',
            example: 0
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
