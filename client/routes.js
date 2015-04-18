Router.configure({
  layoutTemplate: 'layout'
});
// preloadSubscriptions.push('people');
//
PersonController = RouteController.extend({
  data: function() {
    return People.findOne({
      _id: this.params._id
    });
  }
});


Meteor.startup(function() {
  Router.route('/', function() {
    this.render('people');
  });
  Router.route('/person/:_id', {
    name: 'person',
    controller: PersonController
  });
});
