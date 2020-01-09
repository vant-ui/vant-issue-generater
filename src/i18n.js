export default {
  'en-US': {
    name: 'English',
    label: {
      repo: 'I am opening an issue for',
      issueType: 'Issue Type',
      issueTitle: ' Issue Title',
      vantVersion: 'Vant Version',
      deviceOrBrowser: 'Device / Browser',
      device: 'Device',
      vueVersion: 'Vue Version',
      weappVersion: 'VantWeapp Version',
      demo: `If the reproduction does not need a build setup, please provide a link to a
        <a href="https://jsbin.com/?html,output" target="_blank">JsBin</a> or
        <a href="https://codepen.io/" target="_blank">CodePen</a>.
        If it requires a build setup, you can use
        <a href="https://codesandbox.io/s/m5v3f" target="_blank">CodeSandbox</a>
        or provide a GitHub repo.
        `,
      demoTip: 'Please do not just fill in a random link. We will close your issue if you do that.',
      imgDemo: 'Free map bed: ',
      url: 'Reproduction Link',
      imgUrl: 'Screenshot Url（Separated by carriage return）',
      weappCode: 'Core Code Snippet Link',
      weappCodePrompt: 'Code snippet recommendation:',
      notUrl: 'Please provide correct link',
      baseLibVersion: 'Base Library Version',
      description: 'Describe the bug',
      componentName: 'Component Name',
      solveDesc: 'What problem does this feature solve',
      solutionDesc: 'Describe the solution you\'d like',
      apiDesc: 'What does the proposed API look like'
    },
    message: {
      issueTitle: 'Please provide issue title.',
      deviceOrBrowser: 'Please provide Device / Browser.',
      device: 'Please provide Device.',
      url: 'Please provide reproduction link.',
      description: 'Please provide description',
      baseLibVersion: 'Please provide Base Library Version',
      componentName: 'Please provide the name of component.',
      solveDesc: 'Please provide description.',
      solutionDesc: 'Please provide description.',
      apiDesc: 'Please provide description.'
    },
    issueTypeOptions: ['Bug', 'Feature'],
    issueRepoOptions: ['Vant', 'VantWeapp'],
    previewBtn: 'Preview',
    createBtn: 'Create'
  },
  'zh-CN': {
    name: '中文',
    label: {
      repo: '选择要提交 issue 的库',
      issueType: 'Issue 类型',
      issueTitle: 'Issue 标题',
      vantVersion: 'Vant 版本',
      weappVersion: 'VantWeapp 版本',
      deviceOrBrowser: '设备 / 浏览器',
      device: '设备',
      vueVersion: 'Vue 版本',
      baseLibVersion: '基础库版本',
      demo: `如果重现不需要构建工具，请提供一个尽可能精简的
        <a href="https://jsbin.com/?html,output" target="_blank">JsBin</a> 或者是
        <a href="https://codepen.io/" target="_blank">CodePen</a> 链接。
        如果需要构建工具，可以使用
        <a href="https://codesandbox.io/s/m5v3f" target="_blank">CodeSandbox</a>
        或是提供一个 GitHub 仓库的链接。
        `,
      demoTip: '请不要乱填一个链接，那只会让你的 issue 被直接关闭。',
      imgDemo: '截图可以使用免费图床：',
      url: '重现链接',
      imgUrl: '如果是 UI 问题，截图链接（多图回车分隔）',
      weappCode: '请提供核心代码片段链接',
      weappCodePrompt: '代码片段推荐：',
      description: '描述问题',
      componentName: '组件名称',
      solveDesc: '这个功能解决了什么问题',
      solutionDesc: '描述您想要的解决方案',
      apiDesc: '建议的API是什么样的',
      codeDemo: '展示一下新功能的大致用法，代码片段链接（GitHub Gist）'
    },
    message: {
      issueTitle: '请填写Issue标题',
      deviceOrBrowser: '请填写设备 / 浏览器',
      device: '请填写设备',
      baseLibVersion: '请填写基础库版本',
      url: '请填写重现链接',
      imgUrl: '请填写截图链接',
      weappCode: '请提供核心代码片段链接',
      notUrl: '请填写正确的链接',
      description: '请填写描述问题',
      componentName: '请填写组件名称',
      solveDesc: '请填写描述',
      solutionDesc: '请填写描述',
      apiDesc: '请填写描述'
    },
    issueTypeOptions: ['Bug', 'Feature'],
    issueRepoOptions: ['Vant', 'VantWeapp'],
    previewBtn: '预览',
    createBtn: '创建'
  }
}
