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
    'no-console': 'off',
    'no-debugger': 'off',
    camelcase: 0,
    'vue/require-default-prop': 0,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          [
            'delimiters',
            'comments'
          ],
          [
            'components',
            'directives',
            'filters'
          ],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          [
            'props',
            'propsData'
          ],
          'data',
          'computed',
          'watch',
          'methods',
          'LIFECYCLE_HOOKS',
          [
            'template',
            'render'
          ],
          'renderError'
        ]
      }
    ],
    'vue/max-attributes-per-line': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ]
};
