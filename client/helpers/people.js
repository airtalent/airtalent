Template.people.helpers({
  today: function() {
    return new Date();
  },
  yesterday: function() {
    return (new Date() - 1);
  }
});
