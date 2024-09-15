const { User } = require("../models/index.js");

const resolvers = {
  Query: {
    me: async (parent, { userId, username }) => {
      return User.findOne({ $or: [{ _id: userId }, { username: username }] });
    },
  },
};
