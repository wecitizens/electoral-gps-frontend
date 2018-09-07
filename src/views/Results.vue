<template>
    <div class="results">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Candidates" class="col-md-6 tab-center" active>
                    <p>Les candidats qui partagent le plus mes convictions
                        <a href="#" class="badge badge-primary">+ d'infos</a>
                    </p>

                    <ul class="list-group" v-for="(score, idx) in politician_scores" :key="idx">
                        <li class="list-group-item">
                            <h4>{{ politicians.find(p => p.key == score.user_key).first_name + " " 
                                + politicians.find(p => p.key == score.user_key).last_name }}</h4>
                            <h6>{{ electoral_lists.filter(e => e.candidates.map(c =>
                                c.key).includes(score.user_key)).map(e => e.name + " (" +  e.candidates.find(c => c.key ==
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
                    <ul class="list-group tab-scroll" v-for="(score, idx) in electoral_list__scores" :key="idx">
                        <li class="list-group-item">
                            <h4>{{ electoral_lists.find(e => e.key == score.user_key).name }}</h4>
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

    export default {
        name: 'results',
        components: {
            CandidateLists
        },
        data: () => {
            const v = {
                electoral_lists: [
                    {
                        key: "be_1435_cohesion",
                        name: "CoHéSion",
                        candidates: [
                            {
                                "order": 1,
                                "key": "be_politician_2"
                            },
                            {
                                "order": 2,
                                "key": "be_politician_3"
                            }
                        ]
                    },
                    {
                        key: "be_1435_ecolo",
                        name: "Ecolo",
                        candidates: [
                            {
                                "order": 1,
                                "key": "be_politician_4"
                            }
                        ]
                    }
                ],
                politicians: [
                    {
                        key: "be_politician_2",
                        first_name: "John",
                        last_name: "Doe"
                    },
                    {
                        key: "be_politician_3",
                        first_name: "Walter",
                        last_name: "Swan"
                    },
                    {
                        key: "be_politician_4",
                        first_name: "Amy",
                        last_name: "Wight"
                    }
                ],
                politician_scores: [
                    {
                        user_key: "be_politician_2",
                        score: 75.23
                    },
                    {
                        user_key: "be_politician_4",
                        score: 40
                    },
                    {
                        user_key: "be_politician_3",
                        score: 25.4
                    }
                ],
                electoral_list__scores: [
                    {
                        user_key: "be_1435_cohesion",
                        score: 50.3
                    },
                    {
                        user_key: "be_1435_ecolo",
                        score: 25
                    }
                ]
            };

            return v;
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
