Template.people.helpers({
  today: function() {
    return new Date();
  },
  yesterday: function() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
  }
});
