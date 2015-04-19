isAdmin = function(input) {
  //return Meteor.user() && Meteor.user().admin;
  return true;
};

Handlebars.registerHelper('isAdmin', isAdmin);
