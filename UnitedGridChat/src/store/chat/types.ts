import { User } from "../user/types";

export type Message = {
  text: string;
  timestamp: Date;
  user: User;
}