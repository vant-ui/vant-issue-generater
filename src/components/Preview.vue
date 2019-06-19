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
import kebabCase from 'lodash/kebabCase'
import { mapState } from 'vuex'
export default {
  props: {
    contents: Object,
    formValue: Object
  },
  data () {
    return {
      issueContentKeys: [
        'deviceOrBrowser',
        'device',
        'vantVersion',
        'vueVersion',
        'weappVersion',
        'baseLibVersion',
        'url',
        'imgUrl',
        'weappCode',
        'description',
        'solveDesc',
        'solutionDesc',
        'apiDesc',
        'codeDemo'
      ]
    }
  },
  computed: {
    ...mapState([
      'issueRepo',
      'issueType'
    ]),
    title () {
      let type = this.issueType === 'Bug' ? '[Bug Report]' : '[Feature Request]'
      return `${type} ${this.formValue.issueTitle}`
    },
    issueMD () {
      let issue = ''
      this.issueContentKeys.forEach(key => {
        if (!this.formValue[key]) return
        issue += this.formatToMarkdown(key, this.formValue[key])
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
      window.open(`https://github.com/youzan/${kebabCase(this.issueRepo)}/issues/new?title=${this.title}&body=${this.body}`)
    },
    formatToMarkdown (key, value) {
      switch (key) {
        case 'url':
          return `
### ${this.contents.label[key]}
<a href="${this.formValue[key]}" target="_blank">${this.formValue[key]}</a>
`
        case 'imgUrl':
          let MDContent = `
### ${this.contents.label[key]}
`
          let imgUrlArr = value.split(/\s/)
          imgUrlArr.forEach(url => {
            if (!url.trim()) return
            MDContent += `
![截图](${url.trim()})
`
          })
          return MDContent
        default:
          return `
### ${this.contents.label[key]}
${this.formValue[key]}
`
      }
    }
  }
}
</script>
<style scoped lang="scss">
</style>
