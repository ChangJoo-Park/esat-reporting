import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAuthenticated(res) {
    this.transitionTo('app')
  },

  sessionInvalidated() {
    this.transitionTo('login')
  }
});
