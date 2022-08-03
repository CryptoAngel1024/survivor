import _ from 'lodash';
import UserInfo from "./UserInfo";

export default {
  /**
   * Check permissions on a component
   */
  checkPermission: function (name: string, api: boolean = false, method: string = null): any {
    let permitAll = ["Error404", "Login", "Home", "Signin", "ConfirmationEmail", "Recuperopassword"];
    if (_.includes(permitAll, name))
      return true;
    let permissions = UserInfo.get("username"); //TODO check other params Ex. permissions list
    if (!permissions) return null;
    return true;

    // return permissions.find(f => f.name === name && f.api === api && (!method || f.method === method)) || false;
  }
}
