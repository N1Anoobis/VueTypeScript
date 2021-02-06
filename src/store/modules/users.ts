import {
  getModule,
  Module,
  Mutation,
  Action,
  VuexModule,
} from "vuex-module-decorators";
import store from "../../store";
// import { loginUser } from "../api";
import { User, Profile } from "../models";

@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true,
})
class UsersModule extends VuexModule {
  user: User | null = null;
  profile: Profile | null = null;

  // @Mutation
  // setUser(user: User) {
  //   this.user = user;
  // }

  // @Action({ commit: "setUser" })
  // async login(userSubmit: UserSubmit) {
  //   const user = await loginUser(userSubmit);
  //   return { user };
  // }
}

export default getModule(UsersModule);
