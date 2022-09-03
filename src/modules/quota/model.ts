import { fetchAll, fetch } from "../../lib/postgres.js";

import Quota from "../../types/quota";

import query from "./query.js";

export default {
  GET: async ({ quotaYear = 0 }: Quota): Promise<Quota[] | null> => {
    try {
      let quotas = await fetchAll(query.GET, quotaYear);
      if (!quotas || quotas.length == 0) return null;

      return quotas;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  POST: async ({
    quotaContract,
    quotaGrand,
    quotaContractBal,
    quotaGrandBal,
    quotaYear,
    directionId,
  }: Quota): Promise<Quota | null> => {
    try {
      let quota = await fetch(
        query.POST,
        quotaContract,
        quotaGrand,
        quotaContractBal,
        quotaGrandBal,
        quotaYear,
        directionId
      );
      if (!quota) return null;

      const size = Object.keys(quota).length;
      if (size == 0) return null;

      return quota;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  PUT: async (
    { quotaContract, quotaGrand, quotaContractBal, quotaGrandBal, quotaYear, directionId }: Quota,
    { quotaId }: Quota
  ): Promise<Quota | null> => {
    try {
      let quota = await fetch(
        query.PUT,
        quotaContract,
        quotaGrand,
        quotaContractBal,
        quotaGrandBal,
        quotaYear,
        directionId,
        quotaId
      );
      if (!quota) return null;

      const size = Object.keys(quota).length;
      if (size == 0) return null;

      return quota;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DELETE: async (
    { quotaId }: Quota
  ): Promise<Quota | null> => {
    try {
      let quota = await fetch(
        query.DELETE,
        quotaId
      );
      if (!quota) return null;

      const size = Object.keys(quota).length;
      if (size == 0) return null;

      return quota;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
