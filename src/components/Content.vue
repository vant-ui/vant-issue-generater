<template>
  <ARow
    type="flex"
    justify="center"
  >
    <ACol
      class="container"
      :xs="18"
      :sm="18"
      :md="12"
    >
      <Vant v-if="issueRepo === 'Vant'" :contents="contents" />
      <VantWeapp v-else-if="issueRepo === 'VantWeapp'" :contents="contents" />
    </ACol>

    <Preview v-if="showPreivew" :contents="contents" :form-value="formValue" @close="showPreivew=false" />
  </ARow>
</template>
<script>
import LangContents from '@/i18n.js'
import Preview from './Preview'
import Vant from './Vant'
import VantWeapp from './VantWeapp'
import { mapState } from 'vuex'
export default {
  components: { Preview, Vant, VantWeapp },
  data () {
    return {
      showPreivew: false
    }
  },
  computed: {
    ...mapState([
      'issueRepo',
      'issueType'
    ]),
    isBug () {
      return this.issueType === 'Bug'
    },
    isFeature () {
      return !this.isBug
    },
    lang () {
      return this.$route.name
    },
    contents () {
      return LangContents[this.lang]
    }
  },
  watch: {
    contents: {
      handler () {
        console.log('watch', this.contents)
        this.initState()
      },
      immediate: true
    }
  },
  methods: {
    initState () {
      this.$store.commit('save', { key: 'issueRepo', value: this.contents.issueRepoOptions[0] })
      this.$store.commit('save', { key: 'issueType', value: this.contents.issueTypeOptions[0] })
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  padding-top: 30px;
}
ul {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
