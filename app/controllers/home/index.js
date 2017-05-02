import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['skill'],
    
    /**
     * Selected skill
     */
    skill: null,

    skillIsIos: Ember.computed.equal('skill', 'ios'),
    skillIsWeb: Ember.computed.equal('skill', 'web'),
    skillIsBackend: Ember.computed.equal('skill', 'backend'),
    skillIsHardware: Ember.computed.equal('skill', 'hardware'),
    
    /**
     * Current year for the copyright
     */
    currentYear: Ember.computed(function() {
        var date = new Date();
        return date.getFullYear();
    }),

    /**
     * Filtered projects by selected skill
     */
    projects: Ember.computed('model.projects', 'skill', function() {
        var skill = this.get('skill'),
            projects = this.get('model.projects');

        if (!Ember.isBlank(skill)) {
            projects = projects.filter(function(project) {
                return project.skills.includes(skill);
            });
        }
        
        return projects;
    }),

    projectsTitle: Ember.computed('skill', function() {
        var  skill = this.get('skill'),
             title = 'Projects';
        
        if (skill === 'ios') {
            title = 'iOS ' + title;
        
        } else if (skill === 'web') {
            title = 'Web App ' + title;

        } else if (skill === 'backend') {
            title = 'Backend ' + title;

        } else if (skill === 'hardware') {
            title = 'Hardware ' + title;
        }
        
        return title;
    }),

    actions: {
        /**
         * Select/deselect a given skill
         */
        selectSkill: function(skill) {
            var currentSkill = this.get('skill');
            if (currentSkill === skill) {
                skill = null;
            }
            this.set('skill', skill);
        },

        /**
         * Deselect any given skill
         */
        deselectSkill: function() {
            this.set('skill', null);
        }
    }
});
