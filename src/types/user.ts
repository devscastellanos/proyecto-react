import { Data } from "./usuarios";

export interface UserResponse {
  data: Data[];
  support: {
    url: string;
    text: string;
  };
}