import Ember from 'ember';

/**
 * Problem: 
 *   The page scroller keeps in the same position when you go from one page to 
 *   another. For instance, if you scroll down a long list of displayed elements
 *   on a page and then you navigate to another page with another long list of 
 *   elements, you should be able to notice that scroll position is not being 
 *   reset.
 *
 * Solution:
 *   When every route (using this mixin) is activated, use the last known
 *   scroll position.
 *
 * Ref:
 *   http://stackoverflow.com/a/32020378
 */
export default Ember.Mixin.create({
    activate: function() {
        this._super();
        
        var _this = this;
        
        if (this.get('lastScroll')) {
            Ember.run.next(function() {
                Ember.$(window).scrollTop(_this.get('lastScroll'));
            });
        } else {
            Ember.$(window).scrollTop(0);
        }
    },
    
    deactivate: function() {
        this._super();
        this.set('lastScroll', Ember.$(window).scrollTop());
        
    }
});
