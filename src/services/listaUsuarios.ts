import axios from "axios";
import { ApiResponse } from "@/types/usuarios";
import { UserResponse } from "@/types/user";

export async function getUsers(): Promise<ApiResponse> {
  const response = await axios.get("https://reqres.in/api/users");
  console.log(response.data)
  return response.data;
}

export async function getUser(id_user: number): Promise<UserResponse> {
  const response = await axios.get(`https://reqres.in/api/users/${id_user}`);
  return response.data;
}
export async function addUser(user: object): Promise<UserResponse> {
  const response = await axios.post(`https://reqres.in/api/users`,user);
  return response.data;
}

export async function deleteUser(id_user: number): Promise<UserResponse> {
  const response = await axios.delete(`https://reqres.in/api/users/${id_user}`);
  return response.data;
}