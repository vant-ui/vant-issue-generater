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
      <Vant v-if="issueRepo === 'Vant'" :contents="contents" @repoChange="repoChange" @typeChange="typeChange" @submit="preview" />
      <VantWeapp v-else-if="issueRepo === 'VantWeapp'" :contents="contents" @repoChange="repoChange" @typeChange="typeChange" @submit="preview" />
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
      showPreivew: false,
      formValue: {}
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
    '$route': {
      handler () {
        this.initState()
      },
      immediate: true
    }
  },
  methods: {
    typeChange  (e) {
      this.$router.replace({
        name: this.$route.name,
        query: {
          ...this.$route.query,
          type: e.target.value
        }
      })
    },
    repoChange (e) {
      this.$router.replace({
        name: this.$route.name,
        query: {
          ...this.$route.query,
          repo: e.target.value
        }
      })
    },
    preview (values) {
      this.formValue = values
      this.showPreivew = true
    },
    initState () {
      let { query: { repo, type } } = this.$route
      repo = (repo && this.contents.issueRepoOptions.includes(repo)) ? repo : ''
      type = (type && this.contents.issueTypeOptions.includes(type)) ? type : ''
      this.$store.commit('save', { key: 'issueRepo', value: repo || this.contents.issueRepoOptions[0] })
      this.$store.commit('save', { key: 'issueType', value: type || this.contents.issueTypeOptions[0] })
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
