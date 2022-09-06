import Directions from "./direction";
import User from "./user";

export default interface Exam {
  examId?: number;
  userId?: number;
  user?: User;
  directionId?: number;
  direction?: Directions;
  firstScienceCount?: number;
  secondScienceCount?: number;
  examTime?: number;
}
