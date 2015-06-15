import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('about');
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id'}, function() {
      this.resource('new-comment');
      this.resource('comment', {path: ':comment_id'});
    });
  });
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
  this.resource('new-post');

});
