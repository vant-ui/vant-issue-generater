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
          />
        </AFormItem>
      </ACol>

      <ACol :span="12">
        <AFormItem v-if="isBug" :label="contents.label.device">
          <AInput
            v-decorator="['device', { rules: [{ required: true, message: contents.message.device }]}]"
          />
        </AFormItem>
      </ACol>
    </ARow>

    <ARow :gutter="20">
      <ACol :span="12">
        <AFormItem v-if="isBug" :label="contents.label.weappVersion">
          <ASelect
            v-decorator="['weappVersion', { initialValue: initWeappVersion, rules: [{ required: true }]}]"
          >
            <ASelectOption v-for="version in weappVersions" :key="version" :value="version">
              {{ version }}
            </ASelectOption>
          </ASelect>
        </AFormItem>
      </ACol>

      <ACol :span="12">
        <AFormItem v-if="isBug" :label="contents.label.baseLibVersion">
          <AInput
            v-decorator="['baseLibVersion', { rules: [{ required: true, message: contents.message.baseLibVersion }]}]"
          />
        </AFormItem>
      </ACol>
    </ARow>

    <ARow :gutter="20">
      <ACol :span="12">
        <AFormItem v-if="isBug" :label="contents.label.imgUrl">
          <ATextarea
            v-decorator="['imgUrl']"
            :rows="1"
          />
        </AFormItem>

        <AFormItem v-if="isBug">
          <p>{{ contents.label.imgDemo }}</p>
          <ul>
            <li>
              <a href="https://sm.ms/" target="_blank">sm.ms</a>
            </li>
          </ul>
        </AFormItem>
      </ACol>

      <ACol :span="12">
        <AFormItem v-if="isBug" :label="contents.label.weappCode">
          <AInput
            v-decorator="['weappCode', { rules: [
              { required: true, message: contents.message.weappCode },
              { type: 'url', message: contents.message.notUrl }]}]"
          />
        </AFormItem>

        <AFormItem v-if="isBug">
          <p>{{ contents.label.weappCodePrompt }}</p>
          <ul>
            <li>
              <a href="https://gitee.com/gists" target="_blank">Gitee Gist</a>
            </li>
            <li>
              <a href="https://gist.github.com/" target="_blank">GitHub Gist</a>
            </li>
          </ul>
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

    <AFormItem v-if="isFeature" :label="contents.label.apiDesc">
      <ATextarea
        v-decorator="['apiDesc', { rules: [{ required: true, message: contents.message.apiDesc }]}]"
        :rows="3"
      />
    </AFormItem>

    <AFormItem v-if="isFeature" :label="contents.label.codeDemo">
      <AInput
        v-decorator="['codeDemo',{ rules: [{ type: 'url', message: contents.message.notUrl }] }]"
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
      formLayout: 'vertical',
      form: this.$form.createForm(this),
      versionApi: {
        repositoryVersion: 'https://registry.npm.taobao.org/vant-weapp',
        vantWeappVersion: 'https://registry.npm.taobao.org/@vant/weapp'
      },
      weappVersions: [],
      initWeappVersion: ''
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
      const { data: newPackageData } = await axios.get(this.versionApi.vantWeappVersion)
      const allVersions = [...new Set([...Object.keys(newPackageData.versions), ...Object.keys(data.versions)])]
      this.weappVersions = allVersions
      this.initWeappVersion = this.weappVersions[0]
    }
  },
  created () {
    this.fetchRepositoryVersion()
  }
}
</script>
<style scoped lang="scss">
</style>
