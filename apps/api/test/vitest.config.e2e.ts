// apps/api/vitest.config.e2e.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['test/**/*.e2e.ts'],
    coverage: { enabled: false },
  },
});
