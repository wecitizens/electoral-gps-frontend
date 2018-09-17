<template>
    <div v-if="question.text">
        <h3 class="title">
            <span v-if="index">{{ index + 1  }}</span>
            <span v-else>{{ questions.current.index }}</span>/{{ questions.total }} {{ $t('gps.survey.' + question.text)
            }}
        </h3>

        <el-row class="actions">

            <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="bottom">
                <el-button title="test" :disabled="!question.notice" @click="showMoreInfo = !showMoreInfo"
                           :icon="showMoreInfo ? 'el-icon-minus' : 'el-icon-info'" circle></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" :content="$t('importance_tooltip')" placement="bottom">
                <el-button title="test" @click="showImportance = !showImportance"
                           :icon="showImportance ? 'el-icon-minus' : 'el-icon-star-off'" circle></el-button>
            </el-tooltip>
        </el-row>

        <div v-show="showMoreInfo" class="moreInfos mt-3">
            {{ question.notice }}
        </div>

        <div v-show="showImportance && answerFormat.tolerance" class="importances mt-3">
            <el-radio-group v-model="importance">
                <el-radio-button v-for="(importance, key) in answerFormat.tolerance.items" :key="key"
                                 :label="key">{{key}} {{ $t('gps.survey.' + importance.name) }}</el-radio-button>
            </el-radio-group>
        </div>

        <div class="mt-5">
            <el-radio-group v-model="agreement" v-if="answerFormat.items">
                <el-row>
                    <el-radio-button class="el-radio-button--custom" circle v-for="item in answerFormat.items"
                                     :key="item.id"
                                     v-bind:label="item.key">
                        {{ $t('gps.survey.' + item.name) }}
                    </el-radio-button>
                </el-row>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import FoldableIcon from './FoldableIcon';
  import Vue from 'vue';

  export default {
    props: {
      'question': {},
      'answerFormat': {},
      folded: {
        type: Boolean,
        default: false
      },
      index: {
        default: false
      }
    },
    components: {
      FoldableIcon
    },
    data() {
      return {
        agreement: null,
        importance: 1,
        isFolded: this.folded,
        showMoreInfo: false,
        showImportance: false
      }
    },
    computed: {
      ...mapGetters(['questions', 'currentQuestionKey', 'survey'])
    },
    watch: {
      agreement: function (agreement) {
        console.log('Set agreement', agreement);
        setTimeout(() => {
          let tolerance = this.answerFormat.tolerance.items[this.importance].key;
          this.setQuestionImportance({questionKey: this.question.key, importance : tolerance});
          this.setQuestionAgreement({questionKey: this.question.key, agreement});
        }, 1000)
      },
      importance: function (importance) {
        setTimeout(() => {
          let tolerance = this.answerFormat.tolerance.items[importance].key;

          this.setQuestionImportance({questionKey: this.question.key, tolerance})
        }, 100)
      },
    },
    methods: {
      ...mapActions(['setQuestionAgreement', 'setQuestionImportance']),
      showStepLabel: (answerFormat, index) => {
        if (index) {
          return Vue.i18n.translate('gps.survey.' + answerFormat.tolerance.items[index].name);
        }
        return index;
      },
      setImportance: function (importance) {
        console.log('Data', importance);
        this.importance = importance;
      }
    }
  };
</script>

<style lang="scss">

    .answers {
        background: #000000;
    }

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

    h3.title {
        max-width: 28em;
        margin: auto;
    }

    div.more-info {
        max-width: 35em;
        margin: auto;
        font-size: 60%;
        text-align: justify;
        font-weight: normal;
    }

</style>
