export default interface User {
  userId: number;
  userFullName: string;
  userContact: string | number;
  userName: string;
  userRegion: string;
  userPassword?: string;
  userSex: "male" | "female";
}
