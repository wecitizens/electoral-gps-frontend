<template>
  <div>
    <h3>{{ $t('survey.' + question.text) }}</h3>
    <a class="btn">+ {{ $t('more_info') }}</a>
    <div class="mt-3">
      <el-slider class="importance mt-5 mb-5" v-model="importance"
        :step="1" :min="1" :max="3" show-stop="true"
        :format-tooltip="showStepLabel" show-tooltip="show-tooltip">
      </el-slider>
    </div>
    <el-radio-group class="d-none d-sm-block" v-model="agreement">
      <el-radio-button v-for="(item, idx) in answerFormat.items" :key="idx"
          v-bind:label="$t('survey.' + item.name)">
      </el-radio-button>
    </el-radio-group>
    <el-radio-group class="d-block d-sm-none" v-model="agreement">
      <el-row v-for="item in answerFormat.items" :key="item.id">
        <el-col :xs="24">
          <el-radio-button class="el-radio-button--custom" v-bind:label="$t('survey.' + item.name)"></el-radio-button>
        </el-col>
      </el-row>
    </el-radio-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'question',
    'answerFormat'
  ],
  data () {
    return {
      agreement: null,
      importance: 2
    }
  },
  watch: {
    agreement: function (agreement) {
      setTimeout(() => {
        this.setQuestionAgreement({ questionKey: this.question.key, agreement })
      }, 1000)
    },
    importance: function (importance) {
      setTimeout(() => {
        this.setQuestionImportance({ questionKey: this.question.key, importance })
      }, 1000)
    }
  },
  methods: {
    ...mapActions(['setQuestionAgreement', 'setQuestionImportance']),
    showStepLabel: (index) => {
      const key = 'importance.' + index
      return key
    }
  }
}
</script>

<style lang="scss">

.el-radio-button--custom {
  margin: 10px 0 10px 0;

  .el-radio-button__inner {
    width: 250px !important;
  }

  &.is-active {
    .el-radio-button__inner {
      animation: blink-animation 0.4s steps(5, start) 2;
      -webkit-animation: blink-animation 0.4s steps(5, start) 2;
    }
  }
}

.importance{
  width: 500px;
  text-align: center;
  margin: auto;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
