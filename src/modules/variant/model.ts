import { fetchAll, fetch } from "../../lib/postgres.js";

import Variant from "../../types/variant";

import query from "./query.js";

export default {
  POST: async ({
    testId,
    variants,
  }: {
    testId: Variant;
    variants: Variant[];
  }): Promise<Variant[] | null> => {
    try {
      const result = [];

      for (let variant of variants) {
        const item = await fetch(
          query.POST,
          variant.testVariantBody,
          variant.testVariantIstrue,
          testId
        );

        if (item) {
          const size = Object.keys(item).length;
          if (size == 0) return null;

          if (size > 0) {
            result.push(item);
          }
        }
      }

      if (result.length == 0) return null;

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  PUT: async (
    { testVariantBody, testVariantIstrue }: Variant,
    { testVariantId }: Variant
  ): Promise<Variant | null> => {
    try {
      let variant = await fetch(query.PUT, testVariantBody, testVariantIstrue, testVariantId);
      console.log(testVariantBody, testVariantIstrue, testVariantId);

      if (!variant) return null;

      const size = Object.keys(variant).length;
      if (size == 0) return null;

      return variant;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  PUTALL: async ({
    testId,
    variants,
  }: {
    testId: Variant;
    variants: Variant[];
  }): Promise<Variant[] | null> => {
    try {
      const result = [];

      await fetch(query.DELETEALL, testId);

      for (let variant of variants) {
        const item = await fetch(
          query.PUTALL,
          variant.testVariantBody,
          variant.testVariantIstrue,
          testId
        );

        if (item) {
          const size = Object.keys(item).length;
          if (size == 0) return null;

          if (size > 0) {
            result.push(item);
          }
        }
      }

      if (result.length == 0) return null;

      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DELETE: async ({ testVariantId }: Variant): Promise<Variant | null> => {
    try {
      let variant = await fetch(query.DELETE, testVariantId);
      console.log(variant);

      if (!variant) return null;

      const size = Object.keys(variant).length;
      if (size == 0) return null;

      return variant;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
