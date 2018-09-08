import API from '../_helpers/api';
import Vue from 'vue';

const districtService = {
    getDistricts(data = {}) {

        return API.get('/api/vote/district.json', data).then((request) => {

            Vue.i18n.add('en', {vote: request.data.i18n.en})
            Vue.i18n.add('fr', {vote: request.data.i18n.fr})
            Vue.i18n.add('nl', {vote: request.data.i18n.nl})

            return request.data.data
        })
    }
};

export default districtService;