import Ember from 'ember';
import RouteRememberScrollMixin from 'nnoduka/mixins/route-remember-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | route remember scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteRememberScrollObject = Ember.Object.extend(RouteRememberScrollMixin);
  let subject = RouteRememberScrollObject.create();
  assert.ok(subject);
});
