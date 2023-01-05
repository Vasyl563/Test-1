module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],

  rules: {
    indent: ['error', 2],
    'vue/html-self-closing': 'error',
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-multi-spaces': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/script-setup-no-uses-vars': 'off',
    'vue/no-unused-vars': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-setup-props-destructure': 'error',
    'vue/html-indent': ['error', 2],
    'vue/require-v-for-key': 'error',
    'vue/no-v-html': 'off',
    'no-console': 'off',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: [],
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea"]
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea"],
      "allowEmptyLines": false
    }]
  },
}
