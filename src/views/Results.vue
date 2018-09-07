<template>
    <div class="results">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Candidates" class="col-md-6 tab-center" active>
                    <p>Les candidats qui partagent le plus mes convictions
                        <a href="#" class="badge badge-primary">+ d'infos</a>
                    </p>

                    <candidate-lists class="list-scroll"></candidate-lists>

                </b-tab>
                <b-tab title="Listes" class="col-md-6 tab-center">
                    <ul class="list-group tab-scroll" v-for="(score, idx) in electoral_list__scores" :key="idx">
                        <li class="list-group-item">
                            <h4>{{ electoral_lists.find(e => e.key == score.user_key).name }}</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75"
                                     aria-valuemin="0" aria-valuemax="100">75%
                                </div>
                            </div>
                        </li>
                    </ul>
                </b-tab>
            </b-tabs>
        </b-card>
        
        <!--

        <p>{{ politicians.find(p => p.Key = politician_scores[0].user_key).first_name + " " + politicians.find(p => p.Key =
            politician_scores[0].user_key).last_name }}</p>
        
        <p>{{ electoral_lists[0].name }} ({{ electoral_lists[0].candidates.find(c => c.key == politician_scores[0].user_key).order }})</p>
        
        <p>{{ politician_scores[0].score }}</p>
        
        -->

        <div>
            <button type="button" class="btn btn-default">Corriger mes réponses</button>
            <button type="button" class="btn btn-default">Faire un don</button>
        </div>
    </div>
</template>

<script>

    import CandidateLists from '@/components/CandidateList';

    export default {
        name: 'results',
        components: {
            CandidateLists
        },
        data: () => {
            return {
                electoral_lists: [
                    {
                        key: "be_1435_cohesion",
                        name: "CoHésion",
                        candidates: [
                            {
                                "order": 1,
                                "key": "be_politician_2"
                            },
                        ]
                    }
                ],
                politicians: [
                    {
                        key: "be_politician_2",
                        first_name: "John",
                        last_name: "Doe"
                    }
                ],
                politician_scores: [
                    {
                        user_key: "be_politician_2",
                        score: 75.23
                    }
                ],
                electoral_list__scores: [
                    {
                        user_key: "be_1435_cohesion",
                        score: 50.3
                    }
                ]
            }
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
