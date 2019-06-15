export default {
  'en-US': {
    name: 'English',
    label: {
      issueType: 'Issue Type',
      issueTitle: ' Issue Title',
      version: 'Repository Version',
      browser: 'Browser Version',
      device: 'Device',
      vueVersion: 'Vue Version',
      demo: 'Use codesandbox to reproduce issue. If it requires build setup, then create a project and provide a link to a repository.',
      url: 'Reproduction Link',
      notUrl: 'Please provide correct link',
      expectation: 'What is Expected?',
      actual: 'What is actually happening?',
      isHasComponent: 'Existing component?',
      componentName: 'Component Name',
      solveDesc: 'What problem does this feature solve',
      solutionDesc: 'Describe the solution you\'d like',
      apiDesc: 'What does the proposed API look like'
    },
    message: {
      issueTitle: 'Please provide issue title.',
      browser: 'Please provide version of Browser.',
      device: 'Please provide device.',
      url: 'Please provide reproduction link.',
      expectation: 'Please provide what is expected?',
      actual: 'Please provide what is actually happening?',
      componentName: 'Please provide the name of component.',
      solveDesc: 'Please provide description.',
      solutionDesc: 'Please provide description.',
      apiDesc: 'Please provide description.'
    },
    issueTypeOptions: ['Bug', 'Feature'],
    isHasComponentOptions: ['Yes', 'No'],
    previewBtn: 'Preview',
    createBtn: 'Create'
  },
  'zh-CN': {
    name: '中文',
    label: {
      issueType: 'Issue 类型',
      issueTitle: 'Issue 标题',
      version: '项目版本',
      browser: '浏览器版本',
      device: '设备',
      vueVersion: 'Vue版本',
      demo: '请提供可以重现 issue 的链接或者项目，例如：',
      url: '重现链接',
      expectation: '期待的行为',
      actual: '实际的行为',
      isHasComponent: '是否已有组件',
      componentName: '组件名称',
      solveDesc: '这个功能解决了什么问题',
      solutionDesc: '描述您想要的解决方案',
      apiDesc: '建议的API是什么样的'
    },
    message: {
      issueTitle: '请填写Issue标题',
      browser: '请填写浏览器版本',
      device: '请填写设备',
      url: '请填写重现链接',
      notUrl: '请填写正确的链接',
      expectation: '请填写期待的行为',
      actual: '请填写实际的行为',
      componentName: '请填写组件名称',
      solveDesc: '请填写描述',
      solutionDesc: '请填写描述',
      apiDesc: '请填写描述'
    },
    issueTypeOptions: ['Bug', 'Feature'],
    isHasComponentOptions: ['是', '否'],
    previewBtn: '预览',
    createBtn: '创建'
  }
}
