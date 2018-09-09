export default {
    state: {
        current: {
            candidateSegmentAnswers: null,
            electoralListSegmentAnswers: null,
            candidateScores: null,
            electoralListScores: null
        }
    },
    mutations: {},
    actions: {
        performMatch(data) {
            // TODO
            // API get + mutate candidateSegmentAnswers or electoralListSegmentAnswers
            // calculate the scores and mutate
        }
    },
    getters: {}
};