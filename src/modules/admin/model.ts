import { fetch } from "../../lib/postgres.js";

import Admin from "../../types/admin.js";

import query from "./query.js";

export default {
  LOGIN: async ({ adminName, adminPassword }: Admin): Promise<Admin | null> => {
    try {
      let admin = await fetch(query.LOGIN, adminName, adminPassword);

      if (!admin) return null;

      return admin;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
