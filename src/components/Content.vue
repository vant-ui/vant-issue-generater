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
            v-decorator="['issueType', { initialValue: contents.issueTypeOptions[0], rules: [{ required: true }]}]"
            @change="handleIssueTypeChange"
          >
            <ASelectOption v-for="option in contents.issueTypeOptions" :key="option" :value="option">
              {{ option }}
            </ASelectOption>
          </ASelect>
        </AFormItem>

        <AFormItem :label="contents.label.issueTitle">
          <AInput
            v-decorator="['issueTitle', { rules: [{ required: true, message: contents.message.issueTitle }]}]"
          />
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.version">
          <ASelect
            v-decorator="['version', { initialValue: initVersion, rules: [{ required: true }]}]"
          >
            <ASelectOption v-for="version in versions" :key="version" :value="version">
              {{ version }}
            </ASelectOption>
          </ASelect>
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.device">
          <AInput
            v-decorator="['device', { rules: [{ required: true, message: contents.message.device }]}]"
          />
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.browser">
          <AInput
            v-decorator="['browser', { rules: [{ required: true, message: contents.message.browser }]}]"
          />
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.vueVersion">
          <ASelect
            v-decorator="['vueVersion', { initialValue: initVueVersion, rules: [{ required: true }]}]"
          >
            <ASelectOption v-for="version in vueVersions" :key="version" :value="version">
              {{ version }}
            </ASelectOption>
          </ASelect>
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.url">
          <AInput
            v-decorator="['url', { rules: [{ required: true, message: contents.message.url }]}]"
          />
        </AFormItem>

        <AFormItem v-if="isBug">
          <p>{{ contents.label.demo }}</p>
          <ul>
            <li>
              <a href="https://codesandbox.io/s/m5v3f">codesandbox</a>
            </li>
          </ul>
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.expectation">
          <ATextarea
            v-decorator="['expectation', { rules: [{ required: true, message: contents.message.expectation }]}]"
            :rows="4"
          />
        </AFormItem>

        <AFormItem v-if="isBug" :label="contents.label.actual">
          <ATextarea
            v-decorator="['actual', { rules: [{ required: true, message: contents.message.actual }]}]"
            :rows="4"
          />
        </AFormItem>

        <AFormItem v-if="isFeature" :label="contents.label.isHasComponent">
          <ARadioGroup
            v-decorator="['isHasComponent', { initialValue: contents.isHasComponentOptions[0], rules: [{ required: true }]}]"
            button-style="solid"
            @change="isHasComponentChange"
          >
            <ARadioButton v-for="item in contents.isHasComponentOptions" :key="item" :value="item">
              {{ item }}
            </ARadioButton>
          </ARadioGroup>
        </AFormItem>

        <AFormItem v-if="isFeature && hasComponentIsTrue.includes(isHasComponent)" :label="contents.label.componentName">
          <AInput
            v-decorator="['componentName', { rules: [{ required: true, message: contents.message.componentName }]}]"
          />
        </AFormItem>

        <AFormItem v-if="isFeature" :label="contents.label.solveDesc">
          <ATextarea
            v-decorator="['solveDesc', { rules: [{ required: true, message: contents.message.solveDesc }]}]"
            :rows="4"
          />
        </AFormItem>

        <AFormItem v-if="isFeature" :label="contents.label.solutionDesc">
          <ATextarea
            v-decorator="['solutionDesc', { rules: [{ required: true, message: contents.message.solutionDesc }]}]"
            :rows="4"
          />
        </AFormItem>

        <AFormItem v-if="isFeature" :label="contents.label.apiDesc">
          <ATextarea
            v-decorator="['apiDesc', { rules: [{ required: true, message: contents.message.apiDesc }]}]"
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
    let hasComponentIsTrue = Object.keys(LangContents).map(key => LangContents[key].isHasComponentOptions[0])

    return {
      showPreivew: false,
      issueType: '',
      isHasComponent: '',
      hasComponentIsTrue,
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
        this.isHasComponent = this.contents.isHasComponentOptions[0]
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
    isHasComponentChange (e) {
      this.isHasComponent = e.target.value
    },
    handleIssueTypeChange (value) {
      this.issueType = value
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
