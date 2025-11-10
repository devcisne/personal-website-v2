import baseConfig from '@cami/config/eslint/base';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';

export default [
  // Global ignores
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Base shared config
  ...baseConfig,

  // Test files: Vitest env + rules
  {
    files: ['**/*.{spec,test}.ts'],
    plugins: { vitest },
    languageOptions: { globals: { ...globals.vitest, ...globals.node } },
    rules: { ...vitest.configs.recommended.rules },
  },
];
