const gpsSurveyModule = {
    state: {
        current:{
            poll: null,
            survey: null,
            campaign: {
                totalParticipants: 2000
            }
        }
    },
    mutations: {

    },
    actions: {
        getPoll(data){
            // segments, survey  
        },
        getSurvey(data){
            // answer format, questions, question order
        },
        getCampaign(data){
            // number of user who participated
        }
    },
    getters: {

    }
};