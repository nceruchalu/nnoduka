/* eslint-env node */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    environment = EmberApp.env(),
    isProduction = environment === 'production';

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
        // Ref: http://www.ember-cli.com/user-guide/#asset-compilation
        fingerprint: {
            enabled: isProduction,
            extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg',
                         'json', 'pdf'],
            replaceExtensions: ['html', 'js', 'css', 'xml', 'json'],
            prepend: 'https://d38ghovo0vwqhb.cloudfront.net/'
        },
        
        compassOptions: {
            outputStyle: isProduction ? 'compressed' : 'expanded'
        }
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    // Stylesheets to be concatenated to vendor.css
    app.import('vendor/css/ie10-viewport-bug-workaround.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/simple-hint/dist/simple-hint.min.css');
    
    // Scripts to be concatenated to vendor.js
    app.import('vendor/js/ie10-viewport-bug-workaround.js');
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

    return app.toTree();
};
