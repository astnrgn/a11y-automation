import EmberRouter from '@ember/routing/router';
import config from 'a11y-automation/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('criteria', { path: '/:id' });
});