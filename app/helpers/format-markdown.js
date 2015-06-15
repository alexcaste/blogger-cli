import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  var showdown = new Showdown.converter();

  return new Handlebars.SafeString(showdown.makeHtml(markdown));
});
