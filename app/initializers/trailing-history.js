import Ember from 'ember';

var trailingHistory = Ember.HistoryLocation.extend({
    formatURL: function() {
        // Start off by using the default implementation of the method
        var formattedURL = this._super.apply(this, arguments);
        // Extract the different URL components
        var urlComponents = formattedURL.split(/[\?\&]+/);
        
        // Append slashes to path component of url
        var path = urlComponents[0].replace(/\/?$/, '/');
        
        // Sanitize double slashes in the path
        path = path.replace(/[/]{2,}/, '/');
        
        // Finally recompose the URL with this updated path
        formattedURL = path;
        if (urlComponents.length > 1) {
            formattedURL += '?' + urlComponents.slice(1).join('&'); 
        }
        return formattedURL;
    }
});

export default {
    name: 'trailing-history',
    initialize: function initialize(application) {
        application.register('location:trailing-history', trailingHistory);
    }
};
