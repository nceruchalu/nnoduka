import Ember from 'ember';

/**
 * Problem: 
 *   The page scroller keeps in the same position when you go from one page to 
 *   another. For instance, if you scroll down a long list of displayed element 
 *   on a page and then you navigate to another page with another long list of 
 *   elements, you should be able to notice that scroll position is not being 
 *   reset.
 *
 * Solution:
 *   When every route (using this mixin) is activated, reset the scroll to the
 *   top.
 */
export default Ember.Mixin.create({
    activate: function() {
        this._super();
        window.scrollTo(0,0);
    }
});
