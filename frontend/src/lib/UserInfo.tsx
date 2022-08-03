import Request from "./Request";

export default {
  // require: function (onSuccess: (any)=>any) {
  //   Request.authenticatedApi("GET", "/api/user", null,
  //     (user) => {
  //       this.setUser(user);
  //       onSuccess(user);
  //     }
  //   );
  // },
  get: function (param: string): any {
    let user = localStorage.getItem("_UserInfo");
    if (!user || !param) return user;
    user = JSON.parse(user);
    return user[param];
  },
  set: function (param: string, value: any) {
    let user = localStorage.getItem("_UserInfo");
    if (user)
      user = JSON.parse(user);
    user[param] = value;
    localStorage.setItem("_UserInfo", JSON.stringify(user));
  },
  setUser: function (user: any) {
    localStorage.setItem("_UserInfo", JSON.stringify(user));
  }
}