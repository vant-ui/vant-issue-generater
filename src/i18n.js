export default {
  'en-US': {
    name: 'Englist',
    label: {
      issueType: 'Issue Type',
      issueTitle: ' Issue Title',
      version: 'Repository Version',
      browser: 'Browser / OS Version',
      vueVersion: 'Vue Version',
      demo: 'Use codesandbox to reproduce issue. If it requires build setup, then create a project and provide a link to a repository.',
      url: 'Reproduction Link',
      expectation: 'What is Expected?',
      actual: 'What is actually happening?'
    },
    message: {
      issueTitle: 'Please provide issue title.',
      browser: 'Please select version of Browser/OS.',
      url: 'Please provide reproduction link.',
      expectation: 'Please provide what is expected?',
      actual: 'Please provide what is actually happening?'
    },
    issueTypeInit: 'Bug',
    issueTypeOptions: [{
      label: 'Bug',
      key: 'Bug'
    }, {
      label: 'Feature',
      key: 'Feature'
    }],
    previewBtn: 'Preview'
  },
  'zh-CN': {
    name: '中文',
    label: {
      issueType: 'Issue 类型',
      issueTitle: 'Issue 标题',
      version: '项目版本',
      browser: '浏览器版本 / 系统版本',
      vueVersion: 'Vue版本',
      demo: '请提供可以重现 issue 的链接或者项目，例如：',
      url: '重现链接',
      expectation: '期待的行为',
      actual: '实际的行为'
    },
    message: {
      issueTitle: '请填写Issue标题',
      browser: '请填写浏览器版本 / 系统版本',
      url: '请填写重现链接',
      expectation: '请填写期待的行为',
      actual: '请填写实际的行为'
    },
    issueTypeInit: 'Bug',
    issueTypeOptions: [{
      label: 'Bug',
      key: 'Bug'
    }, {
      label: 'Feature',
      key: 'Feature'
    }],
    previewBtn: '预览'
  }
}
