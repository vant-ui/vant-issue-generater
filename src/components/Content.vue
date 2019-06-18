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
          <ARadioGroup
            v-decorator="['issueType', { initialValue: contents.issueTypeOptions[0], rules: [{ required: true }]}]"
            @change="handleIssueTypeChange"
          >
            <ARadioButton v-for="option in contents.issueTypeOptions" :key="option" :value="option">
              {{ option }}
            </ARadioButton>
          </ARadioGroup>
        </AFormItem>
        <ARow :gutter="20">
          <ACol :span="12">
            <AFormItem :label="contents.label.issueTitle">
              <AInput
                v-decorator="['issueTitle', { rules: [{ required: true, message: contents.message.issueTitle }]}]"
              />
            </AFormItem>
          </ACol>

          <ACol :span="12">
            <AFormItem v-if="isBug" :label="contents.label.deviceOrBrowser">
              <AInput
                v-decorator="['deviceOrBrowser', { rules: [{ required: true, message: contents.message.deviceOrBrowser }]}]"
              />
            </AFormItem>
          </ACol>
        </ARow>

        <ARow :gutter="20">
          <ACol :span="12">
            <AFormItem v-if="isBug" :label="contents.label.version">
              <ASelect
                v-decorator="['version', { initialValue: initVersion, rules: [{ required: true }]}]"
              >
                <ASelectOption v-for="version in versions" :key="version" :value="version">
                  {{ version }}
                </ASelectOption>
              </ASelect>
            </AFormItem>
          </ACol>

          <ACol :span="12">
            <AFormItem v-if="isBug" :label="contents.label.vueVersion">
              <ASelect
                v-decorator="['vueVersion', { initialValue: initVueVersion, rules: [{ required: true }]}]"
              >
                <ASelectOption v-for="version in vueVersions" :key="version" :value="version">
                  {{ version }}
                </ASelectOption>
              </ASelect>
            </AFormItem>
          </ACol>
        </ARow>

        <ARow :gutter="20">
          <ACol :span="12">
            <AFormItem v-if="isBug" :label="contents.label.url">
              <AInput
                v-decorator="['url', { rules: [
                  { required: true, message: contents.message.url },
                  { type: 'url', message: contents.message.notUrl },
                ]}]"
              />
            </AFormItem>
          </ACol>
        </ARow>
        <AFormItem v-if="isBug">
          <p>{{ contents.label.demo }}</p>
          <ul>
            <li>
              <a href="https://codesandbox.io/s/m5v3f" target="_blank">codesandbox</a>
            </li>
          </ul>
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.description">
          <ATextarea
            v-decorator="['description', { rules: [{ required: true, message: contents.message.description }]}]"
            :rows="3"
          />
        </AFormItem>

        <AFormItem v-if="isFeature" :label="contents.label.solveDesc">
          <ATextarea
            v-decorator="['solveDesc', { rules: [{ required: true, message: contents.message.solveDesc }]}]"
            :rows="3"
          />
        </AFormItem>

        <AFormItem v-if="isFeature" :label="contents.label.solutionDesc">
          <ATextarea
            v-decorator="['solutionDesc', { rules: [{ required: true, message: contents.message.solutionDesc }]}]"
            :rows="3"
          />
        </AFormItem>

        <AFormItem v-if="isFeature" :label="contents.label.apiDesc">
          <ATextarea
            v-decorator="['apiDesc', { rules: [{ required: true, message: contents.message.apiDesc }]}]"
            :rows="3"
          />
        </AFormItem>

        <AFormItem style="text-align: center;">
          <AButton type="primary" html-type="submit">
            {{ contents.previewBtn }}
          </AButton>
        </AFormItem>
      </AForm>
    </ACol>

    <Preview v-if="showPreivew" :contents="contents" :form-value="formValue" @close="showPreivew=false" />
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
      showPreivew: false,
      issueType: '',
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
        this.issueType = this.contents.issueTypeOptions[0]
        this.form && this.form.resetFields()
      },
      immediate: true
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.formValue = values
          this.showPreivew = true
        }
      })
    },
    handleIssueTypeChange (e) {
      this.issueType = e.target.value
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
  created () {
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
