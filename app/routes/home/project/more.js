import Ember from 'ember';
import RouteResetScroll from 'nnoduka/mixins/route-reset-scroll';

export default Ember.Route.extend(RouteResetScroll, {
    titleToken: 'Other Projects',
    
    model() {
        var projects = this.modelFor('home').projects;
        return projects.findBy('route', 'home.project.more');
    }
});
