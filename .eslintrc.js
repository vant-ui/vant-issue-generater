module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': 0,
    'vue/require-default-prop': 0,
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "methods",
        "LIFECYCLE_HOOKS",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
