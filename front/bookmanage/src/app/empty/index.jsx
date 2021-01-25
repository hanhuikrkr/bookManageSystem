/*
 * @Author: your name
 * @Date: 2020-12-08 14:56:35
 * @LastEditTime: 2020-12-24 14:02:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookManageSystem\front\bookmanage\src\App.jsx
 * https://www.lib.pku.edu.cn/portal/
 */
import React, { Component } from "react";
import Head from "../../component/Head";
import { NavLink, Redirect } from "react-router-dom";
import "../../style/globalStyle.scss";
import { Empty } from "antd";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
class Lib extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="g-head">
          <Head></Head>
        </div>
        <div
          style={{
            alignContent: "center",
            verticalAlign: "middle",
            marginTop: "30vh",
          }}
        >
          <Empty>
            <NavLink to="/">请尝试其他关键字搜索</NavLink>
          </Empty>
        </div>
      </>
    );
  }
}

export default Lib;
