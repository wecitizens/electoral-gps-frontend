<template>
    <div class="results">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Candidates" class="col-md-6 tab-center" active>
                    <p>Les candidats qui partagent le plus mes convictions
                        <a href="#" class="badge badge-primary">+ d'infos</a>
                    </p>

                    <ul class="list-group" v-for="(score, idx) in currentCandidateScores" :key="idx">
                        <li class="list-group-item">
                            <h4>{{ currentElection.candidates.find(p => p.key == score.user_key).full_name</h4>
                            <h6>{{ currentElection.electoral_lists.filter(e => e.candidates.map(c =>
                                c.key).includes(score.user_key)).map(e => e.name + " (" + e.candidates.find(c => c.key
                                ==
                                score.user_key).order)[0] + ")" }}</h6>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="'width:' + score.score + '%;'"
                                     :aria-valuenow="score.score"
                                     aria-valuemin="0" aria-valuemax="100">{{ score.score }}%
                                </div>
                            </div>
                        </li>
                    </ul>
                </b-tab>
                <b-tab title="Listes" class="col-md-6 tab-center">
                    <ul class="list-group tab-scroll" v-for="(score, idx) in currentElectoralListScores" :key="idx">
                        <li class="list-group-item">
                            <h4>{{ currentElection.electoral_lists.find(e => e.key == score.user_key).name }}</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" :style="'width:' + score.score + '%;'"
                                     :aria-valuenow="score.score"
                                     aria-valuemin="0" aria-valuemax="100">{{ score.score }}%
                                </div>
                            </div>
                        </li>
                    </ul>
                </b-tab>
            </b-tabs>
        </b-card>

        <div>
            <button type="button" class="btn btn-default">Corriger mes réponses</button>
            <button type="button" class="btn btn-default">Faire un don</button>
        </div>
    </div>
</template>

<script>

    import CandidateLists from '@/components/CandidateList';
    import {mapGetters} from 'vuex'

    export default {
        name: 'results',
        components: {
            CandidateLists
        },
        created() {
            const poll = this.$store.state.survey.current.poll;
            const answerFormats = this.$store.state.survey.current.survey.answer_formats;

            const survey = this.$store.state.survey.current.survey;
            
            const answers = this.$store.state.list.data.questions
                .map(q => {
                    return {
                        question_key: q.key,
                        answer_format: survey.questions.find(qu => qu.key === q.key).answer_format,
                        value: q.agreement,
                        tolerance: q.importance
                    }
                });
            
            poll.segment_keys.forEach(s => 
                this.$store.dispatch('performMatch', { 
                    segment_key: s,
                    answer_formats: answerFormats,
                    answers: answers
                }));
        },
        computed: {
            ...mapGetters(['currentElection','currentCandidateScores','currentElectoralListScores'])
        }
    }
</script>

<style scoped>
    .tab-center {
        margin: auto;
    }

    .list-scroll {
        height: 70vh;
        overflow-y: scroll;
    }
</style>
