Template.vote_button.events({
  'click': function(event, template) {
    event.preventDefault();

    if (!Meteor.user()) {
      // sign in
      return;
    }

    Meteor.call('People.vote', this._id);
  }
});

Template.vote_button.helpers({
  hasVotedClass: function() {
    if (!Meteor.user()) {
      return;
    }
    if (_(Meteor.user().profile.votedPersonIds).contains(this._id)) {
      return 'has-voted';
    }
  }
});
