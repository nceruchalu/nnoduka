/* eslint-env node */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'nnoduka',
        environment: environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember
                // canary build e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
            APP_NAME: 'Nnoduka Eruchalu'
        }
    };

    ENV.contentSecurityPolicy = {
        'default-src': "'self' www.youtube.com https://www.youtube.com",
        
        // Allow scripts from Google Analytics, Stripe and Same Origin
        // Use unsafe-eval for sake of Firefox
        // Ref: https://github.com/emberjs/ember-inspector/issues/471
        'script-src': "'self' 'unsafe-inline' www.google-analytics.com " +
                      "*.s3.amazonaws.com *.cloudfront.net *.localhost:49154 " +
                      (environment === 'development' ? "'unsafe-eval'" : ""),
        
        // Allow fonts to be loaded from fonts.gstatic.com
        'font-src': "'self' http://fonts.gstatic.com " +
                    "https://fonts.gstatic.com *.s3.amazonaws.com " +
                    "*.cloudfront.net",
        
        // Allow data (websocket)
        'connect-src': "'self' ws://*.localhost:49154",
        
        // Allow images from S3 and (apparently?!) Google Analytics
        'img-src': "'self' www.google-analytics.com *.s3.amazonaws.com " + 
                   "http://*.cloudfront.net https://*.cloudfront.net ",
        
        // Allow inline styles and loaded CSS from fonts.googleapis.com, stripe
        'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com " +
                     "https://fonts.googleapis.com *.s3.amazonaws.com " +
                     "*.cloudfront.net",
        
        'child-src': "'self' www.youtube.com https://www.youtube.com",
        
        'media-src': "'self'"
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

    return ENV;
};
