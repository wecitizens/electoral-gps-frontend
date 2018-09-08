export default {
    state: {
        current:{
            poll: null,
            survey: null,
            campaign: {
                totalParticipants: 23122
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
        campaignTotalParticipants(state) {
            return state.current.campaign.totalParticipants;
        }
    }
};