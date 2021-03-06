import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
      this.sendAction('saveAction');
    },

    deletePost: function() {
      this.sendAction('deleteAction');
    }
  }
});
