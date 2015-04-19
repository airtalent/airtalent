Template.vote_button.events({
  'click .vote-button': function() {
    People.update(this._id, {
      $inc: {
        score: 1
      }
    });
  }
});
