isAdmin = function(input) {
  return Meteor.user();
};

Handlebars.registerHelper('isAdmin', isAdmin);
