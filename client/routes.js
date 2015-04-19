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
      slug: this.params.slug
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
  Router.route('/person/:slug', {
    name: 'person',
    controller: PersonController
  });
  Router.route('/tag/:tag', {
    name: 'tag',
    controller: TagController
  });
});
