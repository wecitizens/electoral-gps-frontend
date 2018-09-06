<template>
    <div class="h-screen">
        <el-main>
            <steps :active="1"></steps>
            <div class="text-center mt-5">
                <h1>{{ $t("district.what_is_your_postcode") }}</h1>
                <p>{{ $t("district.help_customise_survey") }}</p><br/>
                <el-row>
                    <el-autocomplete class="inline-input" v-model="municipality" :fetch-suggestions="querySearch"
                                     v-bind:placeholder="$t('input.place_holder.your_postcode')"
                                     @select="setZipCode({ municipality })"></el-autocomplete>
                </el-row>
                <br/>
                <el-row>
                    <router-link to="/survey" tag="el-button">{{ $t("button.lets_go") }}
                    </router-link>
                </el-row>
            </div>
        </el-main>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex';
    import Steps from '../components/Steps';
    import districtService from '../store/district/services'
    import Vue from 'vue';

    export default {
        name: 'municipality',
        components: {Steps},
        data() {
            return {
                municipality: null
            }
        },
        computed: {
            ...mapGetters(['municipalities']),
            displayNextStepButton() {
                return true
            }
        },
        methods: {
            ...mapActions(['setZipCode']),
            async querySearch(queryString, cb) {
                const municipalities = await districtService.getDistricts();
                const names = municipalities.map(m => { return { value: m.code + " " + Vue.i18n.translate('vote.' + m.name) }})
                
                const results = queryString ?
                    names.filter(this.createFilter(queryString)) : names;
                cb(results)
            },
            createFilter(queryString) {
                return (municipality) => {
                    return (municipality.value.toLowerCase().includes(queryString.toLowerCase()))
                }
            },
            handleSelect() {
                //
            }
        }
    };
</script>
