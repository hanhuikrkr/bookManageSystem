/*
 * @Author: your name
 * @Date: 2020-12-08 14:56:35
 * @LastEditTime: 2020-12-24 14:35:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookManageSystem\front\bookmanage\src\App.jsx
 * https://www.lib.pku.edu.cn/portal/
 */
import React from "react";
import Head from "./component/Head/index";
import Nav from "./component/Nav/index";
import ContantBackground from "./component/Content/index";
import Foot from "./component/Footer/index";
import Loadable from "./component/Loadable";
import "./style/globalStyle.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="g-style">
          <Router history={this}>
            <Switch>
              <Route
                exact
                path="/login"
                component={Loadable({
                  loader: () => import("./app/login/index"),
                })}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <div className="g-head">
                      <Head></Head>
                    </div>
                    <div className="h-nav">
                      <Nav history={this.props.history}></Nav>
                    </div>
                    <div className="g-conback" style={{ zIndex: "-1" }}>
                      <ContantBackground></ContantBackground>
                    </div>
                    <div className="g-foot">
                      <Foot></Foot>
                    </div>
                  </div>
                )}
              />
              <Route
                exact
                path="/lib"
                component={Loadable({
                  loader: () => import("./app/library/index"),
                })}
              />
                <Route
                exact
                path="/empty"
                component={Loadable({
                  loader: () => import("./app/empty/index"),
                })}
              />
               <Route
                exact
                path="/person"
                component={Loadable({
                  loader: () => import("./app/person/index"),
                })}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
