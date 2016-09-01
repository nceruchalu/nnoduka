import Ember from 'ember';
import RouteResetScrollMixin from 'nnoduka/mixins/route-reset-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | route reset scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteResetScrollObject = Ember.Object.extend(RouteResetScrollMixin);
  let subject = RouteResetScrollObject.create();
  assert.ok(subject);
});
