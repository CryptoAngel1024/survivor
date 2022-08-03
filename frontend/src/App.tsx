import React, {PureComponent} from 'react';
import history from "./lib/history";
import Permission from "./lib/Permission";
import {
  Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export interface Props {
}

interface State {
}

const pagePath = {

}

class App extends PureComponent {
  processedURL;
  processedPage = undefined;

  render() {
    return (
      <Router history={history}>
        <Switch>
          {this.generateRoutes()}
        </Switch>
      </Router>
    );
  }

  generateRoutes() {
    let routes = [];
    let path = "";
    routes.push(
      <Route
        exact path={"/"}
        key={"/"}
        render={() => <Redirect to={"/Home"}/>}
      />
    );
    routes.push(
      <Route
        path={path + "/:pagename"}
        key={path + "/:pagename"}
        render={props => {
          try {
            let urlParams = this.getUrlParams();
            let pathToRender = props.location.pathname;
            // this.checkPermissions(pageNameToRender);
            let Page = App.getPage(pathToRender);
            if (!this.processedPage || this.processedPage.name !== Page.name)
              this.processedPage = <Page urlParams={urlParams}/>;
            return (<div className="d-flex flex-column flex-root">
              <div className="d-flex flex-row flex-column-fluid page">
                <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                  <Header urlParams={urlParams}/>
                  <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    {this.processedPage}
                  </div>
                  <Footer/>
                </div>
              </div>
            </div>)
          } catch (e) {
            console.error(e);
            return <ErrorPage/>
          }
        }}/>);
    return routes;

  }

  checkPermissions(pageName) {
    let checkPermission = Permission.checkPermission(pageName);
    if (checkPermission == null)
      history.push("/Home");
  }

  getUrlParams() {
    this.processedURL = window.location.href;
    let urlParams = {location: window.location};
    let queryMode, fragmentMode = false;
    if (this.processedURL.indexOf("?") > -1)
      queryMode = true;
    else if (this.processedURL.indexOf("#") > -1)
      fragmentMode = true;
    let queryStart = queryMode ? this.processedURL.indexOf("?") : fragmentMode ? this.processedURL.indexOf("#") : 0;
    if (queryStart > 0) {
      queryStart++;
      let queryEnd = (queryMode ? this.processedURL.indexOf("#") + 1 : fragmentMode ? this.processedURL.indexOf("?") : false) || this.processedURL.length + 1;
      let query = this.processedURL.slice(queryStart, queryEnd - 1);
      let pairs = query.replace(/\+/g, " ").split("&");
      if (query !== "") {
        for (let i = 0; i < pairs.length; i++) {
          let nv = pairs[i].split("=", 2);
          let n = decodeURIComponent(nv[0]);
          let v = App.transformValue(decodeURIComponent(nv[1]));
          urlParams[n] = nv.length === 2 ? v : null;

        }
      }
    }
    return urlParams;
  }

  static transformValue(value: string) {
    switch (value) {
      case "true":
        return true;
      case "false":
        return false;
      case "null":
        return null;
      case "undefined":
        return undefined;
      case "{}":
        return {};
      case "[]":
        return [];
      default:
        return value;
    }
  }

  private static getPage(pathNameToRender: string) {
    let pathArray = pathNameToRender.split("/");
    let requestedPage = pathArray[pathArray.length - 1];
    let path = pathNameToRender.replace(requestedPage, "");
    return require('./pages' + path + requestedPage + '/' + requestedPage + ".tsx").default;
  }

}

export default App;
