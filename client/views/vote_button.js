Template.vote_button.events({
  'click .vote-button': function(event, template) {
    event.preventDefault();

    if (!Meteor.user()) {
      // sign in
      return;
    }

    console.log("voting for: "+this._id);

    Meteor.call('People.vote', this._id);
  }
});

Template.vote_button.helpers({
  hasVoted: function() {
    if (!Meteor.user()) {
      return;
    }
    if (_(Meteor.user().profile.votedPersonIds).contains(this._id)) {
      return true;
    }
  }
});
