/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'small-project-tracker',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
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
  }

  if (environment === 'production') {

  }

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    routeIfAlreadyAuthenticated: 'app',
    crossOriginWhitelist: ['*'],
    resourceName: 'user'
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://localhost:3000/auth/sign_in',
    serverTokenRefreshEndpoint: 'http://localhost:3000/auth/sign_in',
    refreshAccessTokens: true,
    identificationField: 'email',
    tokenPropertyName: 'access-token',
    refreshLeeway: 3000 // Refresh the token 5 minutes (300s) before it expires.
  };

  return ENV;
};
