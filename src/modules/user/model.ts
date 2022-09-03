import { fetch } from "../../lib/postgres.js";

import User from "../../types/user";

import query from "./query.js";

export default {
  LOGIN: async ({ userName, userPassword }: User): Promise<User | null> => {
    try {
      let user = await fetch(query.LOGIN, userName, userPassword);

      if (!user) return null;

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  REGISTER: async ({
    userFullName,
    userContact,
    userName,
    userRegion,
    userPassword,
    userSex,
  }: User): Promise<User | null> => {
    try {
      let user = await fetch(
        query.REGISTER,
        userFullName,
        userContact,
        userName,
        userRegion,
        userPassword,
        userSex
      );

      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
