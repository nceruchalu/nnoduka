import Ember from 'ember';
import RouteRememberScroll from 'nnoduka/mixins/route-remember-scroll';

export default Ember.Route.extend(RouteRememberScroll, {
    titleToken: null
});
