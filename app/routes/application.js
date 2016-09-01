import Ember from 'ember';
import Config from '../config/environment';

/**
 * The application route is entered when the app first boots up. 
 * So we use this to ensure the title is setup
 */
export default Ember.Route.extend({
    
    title: function(tokens) {
        var tokensJoined = '';
        if (Ember.isArray(tokens) && tokens.get('length') > 0) {
            tokensJoined = tokens.join(' | ') + ' | ';
        }
        return  tokensJoined + Config.APP.APP_NAME;
    }
});
