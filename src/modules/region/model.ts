import { fetchAll, fetch } from "../../lib/postgres.js";

import Region from "../../types/region";

import query from "./query.js";

export default {
  GET: async (): Promise<Region[] | null> => {
    try {
      let regions = await fetchAll(query.GET);
      if (!regions || regions.length == 0) return null;

      return regions;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  POST: async ({ regionName }: Region): Promise<Region | null> => {
    try {
      let region = await fetch(query.POST, regionName);
      if (!region) return null;

      return region;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  PUT: async ({ regionName }: Region, { regionId }: Region): Promise<Region | null> => {
    try {
      let region = await fetch(query.PUT, regionName, regionId);

      const size = Object.keys(region).length;

      if (!region || size == 0) return null;

      return region;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DELETE: async ({ regionId }: Region): Promise<Region | null> => {
    try {
      let region = await fetch(query.DELETE, regionId);

      const size = Object.keys(region).length;

      if (!region || size == 0) return null;

      return region;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
