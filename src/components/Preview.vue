<template>
  <div class="preview">
    <AModal
      title="Issue 预览"
      :visible="true"
      @cancel="$emit('close')"
    >
      <div v-html="issueHTML" />

      <template slot="footer">
        <AButton type="primary" @click="handleCreate">
          {{ contents.createBtn }}
        </AButton>
      </template>
    </AModal>
  </div>
</template>
<script>
import marked from 'marked'
export default {
  props: {
    contents: Object,
    formValue: Object
  },
  data () {
    return {
      issueContentKeys: [
        'version',
        'browser',
        'vueVersion',
        'url',
        'expectation',
        'actual',
        'isHasComponent',
        'componentName',
        'solveDesc',
        'solutionDesc',
        'apiDesc'
      ]
    }
  },
  computed: {
    title () {
      let type = this.formValue.issueType === 'Bug' ? '[Bug Report]' : '[Feature Request]'
      return `${type} ${this.formValue.issueTitle}`
    },
    issueMD () {
      let issue = ''
      this.issueContentKeys.forEach(key => {
        if (!this.formValue[key]) return
        issue += `
### ${this.contents.label[key]}
${this.formValue[key]}
`
      })
      return issue
    },
    body () {
      return encodeURIComponent(this.issueMD).replace(/%2B/gi, '+')
    },
    issueHTML () {
      return marked(this.issueMD)
    }
  },
  methods: {
    handleCreate () {
      window.open(`https://github.com/youzan/vant/issues/new?title=${this.title}&body=${this.body}`)
    }
  }
}
</script>
<style scoped lang="scss">
</style>
