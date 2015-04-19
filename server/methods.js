Meteor.methods({
  'People.vote': function(_id) {
    if (!Meteor.user()) {
      return;
    }

    if (_(Meteor.user().profile.votedPersonIds).include(_id)) {
      return;
    }

    console.log("voting for: " + _id);

    People.update({
      _id: _id
    }, {
      $inc: {
        voteCount: 1
      },
      $addToSet: {
        voterIds: this.userId
      }
    });
    Meteor.users.update({
      _id: this.userId
    }, {
      $addToSet: {
        'profile.votedPersonIds': _id
      }
    });
  }
});
