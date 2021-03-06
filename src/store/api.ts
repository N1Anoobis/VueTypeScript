import axios from "axios";
// import { UserResponse, UserSubmit } from "./models";
import { ArticleResponse } from "./models";

export const conduitApi = axios.create({
  baseURL: "https://conduit.productionready.io/api",
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common["Authorization"] = `Token ${jwt}`;
}

export function clearJWT() {
  delete conduitApi.defaults.headers.common["Authorization"];
}

// export async function loginUser(user: UserSubmit): Promise<UserResponse | undefined> {
//   try {
//     const response = await axios.post("/users/login", {
//       user,
//     });
//     return response.data as UserResponse;
//   } catch (e) {
//       console.log(e)
//   }
// }

export async function getGlobalFeed() {
  const response = await conduitApi.get("/articles");
  return response.data as ArticleResponse;
}
