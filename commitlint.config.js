// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Tipos de commit permitidos
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
    // Mensagem mínima de commit
    'subject-min-length': [2, 'always', 3],
    // Mensagem máxima de commit
    'subject-max-length': [2, 'always', 72],
  },
};
