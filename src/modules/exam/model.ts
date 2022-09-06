import { fetchAll, fetch } from "../../lib/postgres.js";

import Exam from "../../types/exam";

import query from "./query.js";

export default {
  GET: async ({ userId = 0 }: Exam): Promise<Exam[] | null> => {
    try {
      let exams = await fetchAll(query.GET, userId);
      if (!exams || exams.length == 0) return null;

      return exams;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  POST: async ({
    userId,
    directionId,
    firstScienceCount,
    secondScienceCount,
    examTime,
  }: Exam): Promise<Exam | null> => {
    try {
      let exam = await fetch(
        query.POST,
        userId,
        directionId,
        firstScienceCount,
        secondScienceCount,
        examTime
      );
      if (!exam) return null;

      const size = Object.keys(exam).length;
      if (size == 0) return null;

      return exam;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DELETE: async ({ examId }: Exam): Promise<Exam | null> => {
    try {
      let exam = await fetch(query.DELETE, examId);
      if (!exam) return null;

      const size = Object.keys(exam).length;
      if (size == 0) return null;

      return exam;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
