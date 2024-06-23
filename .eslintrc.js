module.exports = {
  extends: ['@mate-academy/eslint-config-react', 'plugin:cypress/recommended'],
  rules: {
    'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
  },
};
