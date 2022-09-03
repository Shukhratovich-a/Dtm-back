import { fetchAll, fetch } from "../../lib/postgres.js";

import Science from "../../types/science";

import query from "./query.js";

export default {
  GET: async (): Promise<Science[] | null> => {
    try {
      let sciences = await fetchAll(query.GET);
      if (!sciences || sciences.length == 0) return null;

      return sciences;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  GETFIRST: async (): Promise<Science[] | null> => {
    try {
      let sciences = await fetchAll(query.GETFIRST);
      if (!sciences || sciences.length == 0) return null;

      return sciences;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  GETSECOND: async ({ scienceId }: Science): Promise<Science[] | null> => {
    try {
      let sciences = await fetchAll(query.GETSECOND, scienceId);
      if (!sciences || sciences.length == 0) return null;

      return sciences;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  POST: async ({ scienceName }: Science): Promise<Science | null> => {
    try {
      let science = await fetch(query.POST, scienceName);
      if (!science) return null;

      return science;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  PUT: async ({ scienceName }: Science, { scienceId }: Science): Promise<Science | null> => {
    try {
      let science = await fetch(query.PUT, scienceName, scienceId);
      if (!science) return null;

      return science;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DELETE: async ({ scienceId }: Science): Promise<Science | null> => {
    try {
      let science = await fetch(query.DELETE, scienceId);
      if (!science) return null;

      const size = Object.keys(science).length;

      if (!science || size == 0) return null;

      return science;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
