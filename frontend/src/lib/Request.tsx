import history from "./history";
import UserInfo from "./UserInfo";


export const url = "http://localhost:3080";

const authorization = "Basic ZGVtb2NsaWVudDpkZW1vY2xpZW50c2VjcmV0"; // TODO this hardcoded auth is bad


export function apiRequest(type, api, body, onSuccess, onError, token?, loaderIsVisible?, responseType?, timeout?) {
  request(
    url + api,
    body,
    type,
    function (xmlHttp) {
      let response;
      let result;
      let success = false;
      response = xmlHttp.response;
      if (xmlHttp.getResponseHeader("Content-Type") == "application/octet-stream") {
        if (response) {
          result = response;
          success = true;
        }
      } else {
        if (response) {
          if (typeof response === 'string') {
            response = JSON.parse(response);
          }
          if (response.response == "Ok") {
            result = response.result;
            success = true;
          }
        }
      }
      if (success) {
        if (onSuccess) onSuccess(result);
      } else {
        console.error(response, xmlHttp);
        if (onError) onError(xmlHttp);
      }
    },
    function (xmlHttp) {
      console.error(xmlHttp);
      if (onError != undefined)
        onError(xmlHttp);
    },
    token,
    false,
    loaderIsVisible,
    responseType,
    timeout
  );
}

// Generic http request

function request(url, body, type, onSuccess, onError, token: string, isTokenRequest: boolean,
                 loaderIsVisible?: boolean, responseType?: XMLHttpRequestResponseType, timeout?: number) {
  if (type.toUpperCase() === "GET" || type.toUpperCase() === "DELETE")
    url += stringifyObject(body);

  let xmlHttp = new XMLHttpRequest();
  // xmlHttp.withCredentials = true;
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4) {
      if (onSuccess != undefined && xmlHttp.status == 200)
        onSuccess(xmlHttp);
      else if (!!onError) {
        onError(xmlHttp);
      }
    }
  };
  xmlHttp.open(type, url);
  xmlHttp.timeout = !!timeout && timeout > 60000 ? timeout : 60000;
  if (isTokenRequest) {
    let formBody: any = [];
    for (let property in body) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    body = formBody.join("&");
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  } else {
    try {
      JSON.parse(JSON.stringify(body));
      xmlHttp.setRequestHeader("Content-Type", "application/json");
      body = JSON.stringify(body);
    } catch (e) {
    }
  }

  if (responseType)
    xmlHttp.responseType = responseType;

  if (token && token != "null")
    xmlHttp.setRequestHeader("Authorization", token);

  xmlHttp.send(body);
}

function saveAuthorization(auth) {
  auth.date = new Date().getTime() / 1000;
  let user = auth.user;
  delete auth.user;
  localStorage.setItem("_oauth", JSON.stringify(auth));
  UserInfo.setUser(user)
}


function getAuthorization() {
  return JSON.parse(localStorage.getItem("_oauth"));
}

function loginIfTokenExpired(xmlHttp) {
  if (xmlHttp.status == 401) {
    history.push('/Home');
  }
}

function getToken(gotToken, onError) {
  let auth = getAuthorization();
  if (!auth) {
    gotToken(auth);
    return;
  }
  //1 hour
  if (auth.date + 3599 > new Date().getTime() / 1000) {
    gotToken(auth["accessToken"]);
    return;
  }

  let body = {
    grant_type: "refresh_token",
    refresh_token: auth["refreshToken"],
  }
  request(
    url + "/oauth/token",
    body,
    "POST",
    function (xmlHttp) {
      let auth = JSON.parse(xmlHttp.responseText);
      saveAuthorization(auth);
      gotToken(auth["accessToken"]);
    },
    function (xmlHttp) {
      loginIfTokenExpired(xmlHttp)
      console.error(xmlHttp);
      if (onError != undefined)
        onError(xmlHttp);
    },
    authorization,
    true
  );
}

function getNewTokenFromRefresh(refreshToken, onSuccess, onError) {
  let body = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  }
  request(
    url + "/oauth/token",
    body,
    "POST",
    function (xmlHttp) {
      let auth = JSON.parse(xmlHttp.responseText);
      saveAuthorization(auth);
      onSuccess();
    },
    function (xmlHttp) {
      loginIfTokenExpired(xmlHttp)
      console.error(xmlHttp);
      if (onError != undefined)
        onError(xmlHttp);
    },
    authorization,
    true
  );
}

export type RequestType = "POST" | "GET" | "PUT" | "DELETE";


export default {
  api: apiRequest,
  getNewTokenFromRefresh: getNewTokenFromRefresh,

  login: function (user, password, onSuccess, onError) {
    let body = {
      grant_type: "password",
      username: user,
      password: password
    }
    request(url + "/oauth/token", body, "POST",
      function (xmlHttp) {
        let response = JSON.parse(xmlHttp.responseText);
        saveAuthorization(response);
        onSuccess(response);
      }, onError, authorization, true
    );
  },

  authenticatedApi: function (type: RequestType, api, body, onSuccess, onError = (request) => undefined, loaderIsVisible = false, responseType = undefined, downloadTimeoutMs = 60000) {
    getToken(
      function (token) {
        apiRequest(type, api, body, onSuccess, onError, "Bearer " + token, loaderIsVisible, responseType, downloadTimeoutMs);
      },
      onError
    );
  },
}

function stringifyObject(obj) {
  let pars = "";
  for (let key in obj) {
    if ((obj[key] === null || obj[key] === undefined) && obj[key] !== false)
      continue;
    else
      pars += (pars ? "&" : "?") + key + "=" + encodeURI(obj[key]);
  }
  return pars;

}