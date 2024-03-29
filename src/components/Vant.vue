<template>
  <AForm
    :layout="formLayout"
    :form="form"
    @submit="handleSubmit"
  >
    <ARow :gutter="20">
      <ACol :span="12">
        <AFormItem :label="contents.label.repo">
          <ARadioGroup
            v-decorator="['repo', { initialValue: issueRepo, rules: [{ required: true }]}]"
            @change="handleRepoChange"
          >
            <ARadioButton v-for="option in contents.issueRepoOptions" :key="option" :value="option">
              {{ option }}
            </ARadioButton>
          </ARadioGroup>
        </AFormItem>
      </ACol>

      <ACol :span="12">
        <AFormItem :label="contents.label.issueType">
          <ARadioGroup
            v-decorator="['issueType', { initialValue: issueType, rules: [{ required: true }]}]"
            @change="handleIssueTypeChange"
          >
            <ARadioButton v-for="option in contents.issueTypeOptions" :key="option" :value="option">
              {{ option }}
            </ARadioButton>
          </ARadioGroup>
        </AFormItem>
      </ACol>
    </ARow>

    <ARow :gutter="20">
      <ACol :span="12">
        <AFormItem :label="contents.label.issueTitle">
          <AInput
            v-decorator="['issueTitle', { rules: [{ required: true, message: contents.message.issueTitle }]}]"
            autocomplete="off"
          />
        </AFormItem>
      </ACol>

      <ACol :span="12">
        <AFormItem v-if="isBug" :label="contents.label.deviceOrBrowser">
          <AInput
            v-decorator="['deviceOrBrowser', { rules: [{ required: true, message: contents.message.deviceOrBrowser }]}]"
            autocomplete="off"
          />
        </AFormItem>
      </ACol>
    </ARow>

    <ARow :gutter="20">
      <ACol :span="12">
        <AFormItem v-if="isBug" :label="contents.label.vantVersion">
          <ASelect
            v-decorator="['vantVersion', { initialValue: initVantVersion, rules: [{ required: true }]}]"
          >
            <ASelectOption v-for="version in vantVersions" :key="version" :value="version">
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
            autocomplete="off"
          />
        </AFormItem>

        <AFormItem v-if="isBug">
          <p v-html="contents.label.demo" />
          <p>{{ contents.label.demoTip }}</p>
        </AFormItem>
      </ACol>
    </ARow>

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
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  props: {
    contents: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      formValue: {},
      formLayout: 'vertical',
      form: this.$form.createForm(this),
      versionApi: {
        repositoryVersion: 'https://registry.npm.taobao.org/vant',
        vueVersion: 'https://registry.npm.taobao.org/vue'
      },
      vantVersions: [],
      initVantVersion: '',
      vueVersions: [],
      initVueVersion: ''
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
    }
  },
  watch: {
    contents: {
      handler () {
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
          this.$emit('submit', values)
        }
      })
    },
    handleRepoChange (e) {
      this.$emit('repoChange', e)
    },
    handleIssueTypeChange (e) {
      this.$emit('typeChange', e)
    },
    async fetchRepositoryVersion () {
      const { data } = await axios.get(this.versionApi.repositoryVersion)
      this.vantVersions = Object.keys(data.versions)
      this.initVantVersion = this.vantVersions[0]
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
</style>
