Router.configure({
  layoutTemplate: 'layout'
});

PeopleController = RouteController.extend({
  data: function() {
    return People.find({}, {
      sort: {
        postedDate: -1,
        voteCount: 1
      }
    });
  },
  loadingTemplate: 'loading'
});

PersonController = RouteController.extend({
  data: function() {
    return People.findOne({
      _id: this.params._id
    });
  }
});

Meteor.startup(function() {
  Router.route('/', {
    name: 'people',
    controller: PeopleController
  });
  Router.route('/person/:_id', {
    name: 'person',
    controller: PersonController
  });
});
