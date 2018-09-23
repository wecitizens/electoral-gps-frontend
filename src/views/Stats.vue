<template>
    <div>
        <steps :active="3"></steps>
        <h1 class="text-center mt-5">{{$t('stats.anonymous_question_to_improve_service')}}</h1>
        <el-form ref="form" label-position="top" :model="form" label-width="120px">

            <el-form-item :label="q[0].title">

                <el-select :v-model="'form.'+q.key" v-if="q.type === 'select'" placeholder="" :value="'form.'+form[q.key]">
                    <el-option v-for="(name, value) in q.options"  :key="value" v-bind:label="name" :name="q.key" value="value"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button @click="seeResults"> {{ $t('button.see_results') }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import Steps from '../components/Steps'
  import ElRadio from "element-ui/packages/radio/src/radio"
  import Api from '../store/_helpers/api';


  export default {
    components: {
      ElRadio,
      Steps
    },
    data() {
      return {
        municipality: null,
        type: null,
        form: {
          source:null,
          age: null,
          party_vote: null
        },
        q : this.$t('stats.questions')
      }
    },
    computed: {

    },
    methods: {
      seeResults(){
        Api.post('stats', this.form).then(() => {
          this.$router.push('/results');
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
