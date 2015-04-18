Template.people.helpers({
  people: function() {
    return People.find({}, {
      sort: {
        score: -1,
        name: 1
      }
    });
  }
});
