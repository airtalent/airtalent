Template.person.events({
  'click .vote-up': function() {
    People.update(this._id, {
      $inc: {
        score: 1
      }
    });
  }
});
