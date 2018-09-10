<template>
    <div>

        <p>Seuls 3 candidats ont répondu au test dans votre commune</p>
        
        <candidate-list class="list-scroll"></candidate-list>
        
        <button class="btn btn-outline-primary">Je fait quand même le test!</button>
        <button class="btn btn-outline-primary">Partager le GPS</button>
        <button class="btn btn-outline-primary">Faire un don</button>
    </div>
</template>

<script>
    import CandidateList from '@/components/CandidateList';
    
    export default {
        name: "poll-insufficient-candidates",
        components: {
            CandidateList
        }
    }
</script>

<style scoped>
    .list-scroll {
        height: 70vh;
        overflow-y: scroll;
    }
</style>