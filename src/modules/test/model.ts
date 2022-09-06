import { fetchAll, fetch } from "../../lib/postgres.js";

import Test from "../../types/test";

import query from "./query.js";

export default {
  GET: async ({ scienceId = 0 }): Promise<Test[] | null> => {
    try {
      let tests = await fetchAll(query.GET, scienceId);
      if (!tests || tests.length == 0) return null;

      tests = tests.map((test) => {
        if (test.testVariants[0]) {
          test.testVariants = test.testVariants.map((variant: any) => {
            delete variant.createAt;
            delete variant.testId;

            return variant;
          });
        }

        return test;
      });

      return tests;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  POST: async ({ testHeading, scienceId }: Test): Promise<Test | null> => {
    try {
      let test = await fetch(query.POST, testHeading, scienceId);
      if (!test) return null;

      const size = Object.keys(test).length;
      if (size == 0) return null;

      return test;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  PUT: async ({ testHeading, scienceId }: Test, { testId }: Test): Promise<Test | null> => {
    try {
      let test = await fetch(query.PUT, testHeading, scienceId, testId);
      if (!test) return null;

      const size = Object.keys(test).length;
      if (size == 0) return null;

      return test;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DELETE: async ({ testId }: Test): Promise<Test | null> => {
    try {
      let test = await fetch(query.DELETE, testId);
      if (!test) return null;

      const size = Object.keys(test).length;
      if (size == 0) return null;

      return test;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
