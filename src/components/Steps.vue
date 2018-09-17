<template>
  <el-steps class="steps mt-20" :active="active" simple>
    <el-step :index="1">
      <template slot="title">
        <router-link to="/municipality">{{ $t('menu.item.municipality') }}</router-link>
      </template>
    </el-step>
    <el-step :index="2">
      <template slot="title">
        <router-link v-if="vote.current.election" :to="'/survey/'+vote.current.district.key">{{ $t('menu.item.questions') }}</router-link>
        <a v-else>{{ $t('menu.item.questions') }}</a>
      </template>
    </el-step>
    <el-step :index="3">
      <template slot="title">
        <router-link to="/stats">{{ $t('menu.item.stats') }}</router-link>
      </template>
    </el-step>
    <el-step :index="4">
      <template slot="title">
        <router-link to="/results">{{ $t('menu.item.results') }}</router-link>
      </template>
    </el-step>
  </el-steps>
</template>

<script>

  import {mapGetters, mapState} from "vuex";

export default {
  name: 'steps',
  props: {
    active: Number
  },
  computed : {
    ...mapGetters(['questions']),
    ...mapState(['vote'])
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .steps{
    margin-top: 30px;
    background: #F8E71C;
    padding: 0.5em;
    width: 100%;
    border-radius: 0 !important;

    &:before {
      background-color: #F2F2F2;
      bottom: -50px;
      content: '';
      display: block;
      left: -100%;
      position: absolute;
      z-index: -1;
    }

    a{
      color: #000000;
      font-weight: bold;
    }
  }
</style>
