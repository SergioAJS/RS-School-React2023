import { defineConfig } from 'cypress';

import registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  projectId: 'o8viao',
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
    experimentalRunAllSpecs: true,
  },
});
