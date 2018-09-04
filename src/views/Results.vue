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
                    <ul class="list-group tab-scroll">
                        <li class="list-group-item">
                            <h4>Liste du Bourgmestre</h4>
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
