<template>
  <AModal
    class="preview"
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
        'vantVersion',
        'deviceOrBrowser',
        'vueVersion',
        'url',
        'description',
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
        issue += key === 'url' ? `
### ${this.contents.label[key]}
<a href="${this.formValue[key]}" target="_blank">${this.formValue[key]}</a>
` : `
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
  watch: {
    issueHTML: {
      handler () {
        this.$nextTick(() => {
          let links = document.querySelectorAll('.preview a')
          links.forEach(dom => {
            if (!dom.getAttribute('target')) {
              dom.setAttribute('target', '_blank')
            }
          })
        })
      },
      immediate: true
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
