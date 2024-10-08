const { User } = require("../models/index.js");
const { signToken, AuthenticationError } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, { userId, username }) => {
      return User.findOne({ $or: [{ _id: userId }, { username: username }] });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { userId, book }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { savedBooks: book } },
          { new: true, runValidators: true }
        );
      }

      throw AuthenticationError;
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
