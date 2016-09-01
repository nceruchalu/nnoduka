import Ember from 'ember';
import RouteResetScroll from 'nnoduka/mixins/route-reset-scroll';

export default Ember.Route.extend(RouteResetScroll, {
    titleToken: 'Me',
    
    model: function() {
        return {
            title: 'Nnoduka Eruchalu',
            snippet: 'Dev ⇒ PM ⇒ Dev',
            year: '1990',
            type: 'Maker'
        };
    }
});
