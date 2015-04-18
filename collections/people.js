People = new Mongo.Collection("people");

People.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 30
  },
  headline: {
    type: String,
    label: "Headline",
    max: 1000
  },
  profile: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: "Profile"
  },
  voterIds: {
    type: [String],
    optional: true,
    defaultValue: [],
    autoform: {
      omit: true
    }
  },
  voteCount: {
    type: Number,
    optional: true,
    defaultValue: 0,
    autoform: {
      omit: true
    }
  }
}));
