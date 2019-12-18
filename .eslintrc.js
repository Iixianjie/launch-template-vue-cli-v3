module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'parserOptions': {
    'parser': 'babel-eslint',
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  'rules': {
    'comma-dangle': [2, 'always-multiline'],
    'no-var': 'error',
    'camelcase': 'off',
    'no-extra-boolean-cast': 'off',
    'semi': ['error', 'always'],
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/prop-name-casing': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 20,
        'multiline': {
          'max': 1,
          'allowFirstLine': false,
        },
      },
    ],
  },
};
