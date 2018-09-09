<template>
    <div class="h-screen">
        <el-main>
            <steps :active="1"></steps>
            <div class="text-center mt-5">
                <h1>{{ $t("district.what_is_your_postcode") }}</h1>
                <p>{{ $t("district.help_customise_survey") }}</p><br/>
                <el-row>
                    <el-autocomplete class="inline-input" v-model="district" :fetch-suggestions="filterDistricts"
                                     v-bind:placeholder="$t('input.place_holder.your_postcode')"
                                     @select="setCurrentDistrict({ district })"></el-autocomplete>
                </el-row>
                <br/>
                <el-row v-show="district">
                    <router-link to="/survey" tag="el-button">{{ $t("button.lets_go") }}
                    </router-link>
                </el-row>
            </div>
        </el-main>
    </div>
</template>

<script>

    import {mapGetters, mapActions, mapMutations} from 'vuex';
    import Steps from '../components/Steps';

    export default {
        name: 'district',
        components: {Steps},
        data() {
            return {
                district: null
            }
        },  
        created() {
            this.$store.dispatch('getDistricts');
        },
        computed: {
            displayNextStepButton() {
                return true
            }
        },
        methods: {
            setCurrentDistrict(data){
                const district = this.$store.state.vote.districtSearchResults.find(r => r.value === data.district);
                this.$store.commit("setCurrentDistrict", district);
                this.$store.dispatch("setCurrentElection", district);
            },
            async filterDistricts(data, cb){
                await this.$store.dispatch('filterDistricts',data);
                cb(this.$store.state.vote.districtSearchResults);
            }
        }
    };
</script>
