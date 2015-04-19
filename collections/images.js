Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

Images.allow({
  insert: function(userId, doc) {
    return userId;
  },
  update: function(userId, doc) {
    return userId;
  },
  remove: function(userId, doc) {
    return userId;
  }
});
