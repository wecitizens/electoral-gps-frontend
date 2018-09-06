<template>
    <div>
        <h3>{{ $t('gps.survey.' + question.text) }}</h3>
        <a class="btn" v-show="question.notice" @click="() => isMoreInfo = !isMoreInfo">
            <foldable-icon :folded="!isMoreInfo"></foldable-icon>
            {{ $t('more_info') }}</a>
        <a v-show="folded" class="btn btn-default" @click="() => isFolded = !isFolded">
            <foldable-icon :folded="isFolded"></foldable-icon>
            {{ $t('Voir la réponse') }}</a>
        <div v-show="isMoreInfo">
            <p>{{ $t('gps.survey.' + question.notice) }}</p>
        </div>
        <div v-show="!isFolded">
            <div class="mt-3">
                <div class="slider-wrapper">
                    <el-slider class="importance mt-5 mb-5" v-model="importance"
                               :step="1" :min="1" :max="3" show-stop="true"
                               :format-tooltip="showStepLabel" show-tooltip="show-tooltip">
                    </el-slider>
                    <div class="row slider-legend">
                        <div class="col text-left">{{ $t("tolerance_1") }}</div>
                        <div class="col text-center">{{ $t("tolerance_2") }}</div>
                        <div class="col text-right">{{ $t("tolerance_3") }}</div>
                    </div>
                </div>
            </div>
            <el-radio-group v-model="agreement">
                <el-row v-for="item in answerFormat.items" :key="item.id">
                    <el-col :xs="24">
                        <el-radio-button class="el-radio-button--custom"
                                         v-bind:label="$t('gps.survey.' + item.name)"></el-radio-button>
                    </el-col>
                </el-row>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import FoldableIcon from '../FoldableIcon';
  import Vue from 'vue';

  export default {
    props: {
      'question': {},
      'answerFormat': {},
      folded: {
        type: Boolean,
        default: false
      }
    },
    components: {
      FoldableIcon
    },
    data() {
      return {
        agreement: null,
        importance: 2,
        isFolded: this.folded,
        isMoreInfo: false
      }
    },
    watch: {
      agreement: function (agreement) {
        setTimeout(() => {
          this.setQuestionAgreement({questionKey: this.question.key, agreement})
        }, 1000)
      },
      importance: function (importance) {
        setTimeout(() => {
          this.setQuestionImportance({questionKey: this.question.key, importance})
        }, 1000)
      }
    },
    methods: {
      ...mapActions(['setQuestionAgreement', 'setQuestionImportance']),
      showStepLabel: (index) => {
        if (index) {
          return Vue.i18n.translate('tolerance_' + index)
        }
        return index;
      }
    }
  }
</script>

<style lang="scss">

    .slider-wrapper {
        width: 60%;
        margin: -40px auto 1em;

        .slider-legend {

            color: #5a676e;
            font-size: 12px;
            margin-top: -50px;

            .text-left {
                margin-left: -50px;
            }

            .text-right {
                margin-right: -50px;
            }
        }
    }

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
