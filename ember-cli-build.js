'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const IsProduction = 'production' === EmberApp.env();

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      sourceMap: !IsProduction,
      sourceMapEmbed: !IsProduction
    },
    'ember-cli-babel': {
      includePolyfill: true
    }
  });

  return app.toTree();
};
