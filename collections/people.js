People = new Mongo.Collection("people");

People.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 30
  },
  slug: {
    type: String,
    label: "Slug (for nice urls)",
    max: 30
  },
  headline: {
    type: String,
    label: "Headline",
    max: 1000,
    autoform: {
      afFieldInput: {
        type: "textarea"
      }
    }
  },
  referredBy: {
    type: String,
    label: "Referred By",
    max: 30
  },
  postedDate: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
  tag1: {
    type: String,
    label: "Tag 1",
    optional: true
  },
  tag2: {
    type: String,
    label: "Tag 2",
    optional: true
  },
  tag3: {
    type: String,
    label: "Tag 3",
    optional: true
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
