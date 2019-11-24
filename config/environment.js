'use strict';

const { api: UseApi } = require('yargs').argv;

module.exports = function(environment) {
  let ENV = {
    APP: {
      api: {
        host: UseApi ? 'http://localhost:3000' : 'http://localhost:4200',
        namespace: UseApi ? null : 'api'
      }
    },
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    'ember-cli-mirage': {
      enabled: !UseApi
    },
    environment,
    locationType: 'hash',
    modulePrefix: 'mobileapp',
    podModulePrefix: 'mobileapp/pods',
    rootURL: ''
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
