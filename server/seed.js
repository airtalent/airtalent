Meteor.startup(function() {
  if (People.find().count() === 0) {
    var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
      "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
    _.each(names, function(name) {
      People.insert({
        name: name,
        headline: "Kick-ass Startup person",
        score: 0
      });
    });
  }
});
