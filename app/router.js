import Ember from 'ember';
import config from './config/environment';
import documentTitle from 'nnoduka/utils/document-title';

const Router = Ember.Router.extend({
    // Use HTML5 History API with trailing-slash URLs instead of hash-tag URLs
    location: 'trailing-history',
    rootURL: config.rootURL
});

documentTitle();

Router.map(function() {
    this.route('home', { path: '/' }, function() {
        this.route('index', { path: '/' });
        this.route('bio', { path: '/me' });

        this.route('project', { path: '/made' }, function() {
            this.route('raven', { path: '/raven' });
            this.route('volleyy', { path: '/volleyy' });
            this.route('gravvy', { path: '/gravvy' });
            this.route('evently', { path: '/evently' });
            this.route('blabbit', { path: '/blabbit' });
            this.route('retrac', { path: '/retrac' });
            this.route('easypay', { path: '/easypay' });
            this.route('noddymix', { path: '/noddymix' });
            this.route('radio', { path: '/radio' });
            this.route('more', { path: '/more' });
        });
    });
    
    // General 404 error page
    this.route('error404', { path: '/*path' });
});

export default Router;
