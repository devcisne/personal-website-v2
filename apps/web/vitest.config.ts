import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/setupTests.ts'],
        include: ['src/**/*.{spec,test}.{ts,tsx}'],
        coverage: { provider: 'v8' }
    }
});
