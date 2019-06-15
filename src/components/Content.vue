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
      <AForm
        :layout="formLayout"
        :form="form"
        @submit="handleSubmit"
      >
        <AFormItem :label="contents.label.issueType">
          <ASelect
            v-decorator="['type', { initialValue: contents.issueTypeInit, rules: [{ required: true }]}]"
          >
            <ASelectOption v-for="option in contents.issueTypeOptions" :key="option.key" :value="option.key">
              {{ option.label }}
            </ASelectOption>
          </ASelect>
        </AFormItem>

        <AFormItem :label="contents.label.issueTitle">
          <AInput
            v-decorator="['title', { rules: [{ required: true, message: contents.message.issueTitle }]}]"
          />
        </AFormItem>

        <AFormItem :label="contents.label.version">
          <ASelect
            v-decorator="['type', { initialValue: initVersion, rules: [{ required: true }]}]"
          >
            <ASelectOption v-for="version in versions" :key="version" :value="version">
              {{ version }}
            </ASelectOption>
          </ASelect>
        </AFormItem>

        <AFormItem :label="contents.label.browser">
          <AInput
            v-decorator="['browser', { rules: [{ required: true, message: contents.message.browser }]}]"
          />
        </AFormItem>

        <AFormItem :label="contents.label.vueVersion">
          <ASelect
            v-decorator="['type', { initialValue: initVueVersion, rules: [{ required: true }]}]"
          >
            <ASelectOption v-for="version in vueVersions" :key="version" :value="version">
              {{ version }}
            </ASelectOption>
          </ASelect>
        </AFormItem>

        <AFormItem :label="contents.label.url">
          <AInput
            v-decorator="['url', { rules: [{ required: true, message: contents.message.url }]}]"
          />
        </AFormItem>

        <AFormItem>
          <p>{{ contents.label.demo }}</p>
          <ul>
            <li>
              <a href="https://codesandbox.io/s/m5v3f">codesandbox</a>
            </li>
          </ul>
        </AFormItem>

        <AFormItem :label="contents.label.expectation">
          <ATextarea
            v-decorator="['expectation', { rules: [{ required: true, message: contents.message.expectation }]}]"
            :rows="4"
          />
        </AFormItem>

        <AFormItem :label="contents.label.actual">
          <ATextarea
            v-decorator="['actual', { rules: [{ required: true, message: contents.message.actual }]}]"
            :rows="4"
          />
        </AFormItem>

        <AFormItem style="text-align: center;">
          <AButton type="primary" html-type="submit">
            {{ contents.previewBtn }}
          </AButton>
        </AFormItem>
      </AForm>
    </ACol>

    <Preview v-if="showPreivew" :form-value="formValue" @close="showPreivew=false" />
  </ARow>
</template>
<script>
import LangContents from '@/i18n.js'
import axios from 'axios'
import Preview from './Preview'
export default {
  components: { Preview },
  data () {
    return {
      showPreivew: true,
      formValue: {},
      formLayout: 'vertical',
      form: this.$form.createForm(this),
      versionApi: {
        repositoryVersion: 'https://registry.npm.taobao.org/vant',
        vueVersion: 'https://registry.npm.taobao.org/vue'
      },
      versions: [],
      initVersion: '',
      vueVersions: [],
      initVueVersion: ''
    }
  },
  computed: {
    lang () {
      return this.$route.name
    },
    contents () {
      return LangContents[this.lang]
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.showPreivew = true
        }
      })
    },
    async fetchRepositoryVersion () {
      const { data } = await axios.get(this.versionApi.repositoryVersion)
      this.versions = Object.keys(data.versions)
      this.initVersion = this.versions[0]
    },
    async fetchVueVersion () {
      const { data } = await axios.get(this.versionApi.vueVersion)
      this.vueVersions = Object.keys(data.versions)
      this.initVueVersion = this.vueVersions[0]
    }
  },
  mounted () {
    this.fetchRepositoryVersion()
    this.fetchVueVersion()
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
