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
  score: {
    type: Number,
    label: "Score",
    defaultValue: 0,
    autoform: {
      omit: true
    }
  },
}));
