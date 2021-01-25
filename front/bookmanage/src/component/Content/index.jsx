/*
 * @Author: your name
 * @Date: 2020-12-22 14:46:40
 * @LastEditTime: 2020-12-27 23:58:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookManageSystem\front\bookmanage\src\component\Content\index.jsx
 */

import React from "react";
import "./style.scss";
import { Carousel } from "antd";

const contentStyle = {
  height: "99vh",
  color: "#fff",
  lineHeight: "99vh",
  textAlign: "center",
  background: "#364d79",
  display: "block",
};

function ContantBackground() {
  return (
    <div className="g-content-style">
      <Carousel autoplay>
        <div className="g-content-style-img" style={contentStyle}>
          <img  src="https://www.hznu.edu.cn/upload/resources/image/2019/02/26/7493243.jpg"></img>
        </div>
        <div className="g-content-style-img"  style={contentStyle}>
          <img src="https://www.hznu.edu.cn/upload/resources/image/2019/02/26/7493240.jpg"></img>
        </div>
        <div className="g-content-style-img"  style={contentStyle}>
          <img src="https://www.hznu.edu.cn/upload/resources/image/2019/02/26/7493232.jpg"></img>
        </div>
        <div className="g-content-style-img"  style={contentStyle}>
          <img src="https://www.hznu.edu.cn/upload/resources/image/2019/02/25/7493125.jpg"></img>
        </div>
      </Carousel>
    </div>
  );
}

export default ContantBackground;
