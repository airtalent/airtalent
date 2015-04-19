Router.configure({
  layoutTemplate: 'layout'
});

PeopleController = RouteController.extend({
  data: function() {
    return People.find({}, {
      sort: {
        postedDate: -1,
        voteCount: -1
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

TagController = RouteController.extend({
  data: function() {
    var tag = this.params.tag;
    return People.find({
      $or: [
        {
          tag1: tag
        },
        {
          tag2: tag
        },
        {
          tag3: tag
        }
      ]
    }, {
      sort: {
        voteCount: -1
      }
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
  Router.route('/tag/:tag', {
    name: 'tag',
    controller: TagController
  });
});
