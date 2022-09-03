import { fetchAll, fetch } from "../../lib/postgres.js";

import Direction from "../../types/direction";

import query from "./query.js";

export default {
  GET: async (): Promise<Direction[] | null> => {
    try {
      let directions = await fetchAll(query.GET);
      if (!directions || directions.length == 0) return null;

      return directions;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  GETBYSCIENCES: async ({
    firstScienceId,
    secondScienceId,
  }: Direction): Promise<Direction[] | null> => {
    try {
      let directions = await fetchAll(query.GETBYSCIENCES, firstScienceId, secondScienceId);
      if (!directions || directions.length == 0) return null;

      return directions;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  POST: async ({
    directionName,
    firstScienceId,
    secondScienceId,
  }: Direction): Promise<Direction | null> => {
    try {
      let direction = await fetch(query.POST, directionName, firstScienceId, secondScienceId);
      if (!direction) return null;

      const size = Object.keys(direction).length;
      if (size == 0) return null;

      return direction;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  PUT: async (
    { directionName, firstScienceId, secondScienceId }: Direction,
    { directionId }: Direction
  ): Promise<Direction | null> => {
    try {
      let direction = await fetch(
        query.PUT,
        directionName,
        firstScienceId,
        secondScienceId,
        directionId
      );

      if (!direction) return null;

      const size = Object.keys(direction).length;
      if (size == 0) return null;

      return direction;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DELETE: async ({ directionId }: Direction): Promise<Direction | null> => {
    try {
      let direction = await fetch(query.DELETE, directionId);

      if (!direction) return null;

      const size = Object.keys(direction).length;
      if (size == 0) return null;

      return direction;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
