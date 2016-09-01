import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'nav',
    classNames: ['navbar navbar-fixed-top navbar--project'],
    
    /**
     * Default meta value to use for the title element
     */
    titleMeta: 'Project'
});
