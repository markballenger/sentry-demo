module.exports = {
  pluginOptions: {
    'vue-cli-plugin-sentry': {
      registry: undefined,
      organization: 'global-payments',
      project: 'sentry-demo',
      apiKey: '<insert your sentry.io API key>',
      'release-mode': 'auto',
      baseSentryURL: 'https://sentry.io/api/0',
      dsn: '<insert your sentry.io dsn>',
      release: 'v1.1'
    }
  }
}
