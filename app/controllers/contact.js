import Ember from "ember";

var ContactController = {
  messageSent: false,
  actions: {
    sendMessage: function() {
      prompt('Type your message:');
      this.set('confirmationNumber', Math.floor(Math.random() * 10000));
      this.set('messageSent', true);
    }
  }
};

export default Ember.Controller.extend(ContactController);
