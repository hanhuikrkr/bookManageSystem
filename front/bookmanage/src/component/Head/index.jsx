/*
 * @Author: your name
 * @Date: 2020-12-08 15:58:44
 * @LastEditTime: 2020-12-24 14:41:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookManageSystem\front\bookmanage\src\component\Head\index.jsx
 */
import { useState, useEffect } from "react";
import React, { Component } from "react";
import {
  ClockCircleOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { inject, observer } from "mobx-react";
import { computed } from "mobx";
import { NavLink, Redirect } from "react-router-dom";

import classnames from "classnames";
@inject("userStore")
class Head extends Component {
  @computed
  get usr() {
    return this.props.userStore.usr;
  }
  render() {
    return (
      <div>
        <div className="head-atr">
          <NavLink to="/">
            <div className="m-index-logo-box">
              <div className="logo-hzsfdxtsg"></div>
            </div>
          </NavLink>
          <div style={{ padding: "1vh" }}>
            <div>
              <ClockCircleOutlined />

              <a
                href="https://www.lib.pku.edu.cn/portal/cn/fw/rgzn/guancangfenbu"
                target="_blank"
                style={{ color: "white" }}
              >
                &nbsp;今日开馆：6:30 - 22:30
              </a>
            </div>
          </div>
          <div style={{ padding: "1vh" }}>
            {!this.usr.role && (
              <NavLink to="/login">
                <div style={{ color: "white" }}>
                  <UserOutlined />
                  &nbsp;我的图书馆
                </div>
              </NavLink>
            )}
            {this.usr.role && (
              <NavLink to="/person">
                <div style={{ color: "white" }}>
                  <SmileOutlined />
                  &nbsp;下午好!&nbsp;{this.usr.name}
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
