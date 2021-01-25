/*
 * @Author: your name
 * @Date: 2020-12-08 14:56:35
 * @LastEditTime: 2020-12-28 01:02:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookManageSystem\front\bookmanage\src\App.jsx
 * https://www.lib.pku.edu.cn/portal/
 */
import React, { Component } from "react";
import Head from "../../component/Head";
import "../../style/globalStyle.scss";
import {
  Card,
  Avatar,
  Divider,
  Descriptions,
  Badge,
  Tooltip,
  Row,
  Col,
} from "antd";
import {
  BarcodeOutlined,
  IdcardOutlined,
  ContainerOutlined,
  EyeOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
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
        <Row style={{ margin: "30px" }} gutter={24}>
        <Col lg={4} md={6} sm={12}>
            <Card
              cover={
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="example"
                  src="http://www.hanhuikrkr.com:7112/srjsg.jpg"
                />
              }
              actions={[
                <a href="https://book.douban.com/subject/26647769/">
                  查看详情
                </a>,
              ]}
            >
              <h3
                style={{
                  color: "red",
                  fontFamily: "楷体",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                《人间失格》
              </h3>
              <div style={{ float: "left" }}>
                <Descriptions column={{ lg: 1, sm: 1, md: 1 }}>
                  <Descriptions.Item label="作者">
                    [日]太宰治
                  </Descriptions.Item>
                  <Descriptions.Item label="ISBN">
                  9787506380263
                  </Descriptions.Item>
                  <Descriptions.Item label="馆藏位置">
                    3楼 西座 I31柜 A面 4层
                  </Descriptions.Item>
                  <Descriptions.Item label="状态">
                    在馆2册 可借阅
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card
              cover={
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="example"
                  src="http://www.hanhuikrkr.com:7112/sbyx.jpg"
                />
              }
              actions={[
                <a href="https://book.douban.com/subject/10554308/">
                  查看详情
                </a>,
              ]}
            >
              <h3
                style={{
                  color: "red",
                  fontFamily: "楷体",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                《白夜行》
              </h3>
              <div style={{ float: "left" }}>
                <Descriptions column={{ lg: 1, sm: 1, md: 1 }}>
                  <Descriptions.Item label="作者">
                    [日]东野圭吾
                  </Descriptions.Item>
                  <Descriptions.Item label="ISBN">
                    9787544258609
                  </Descriptions.Item>
                  <Descriptions.Item label="馆藏位置">
                    3楼 西座 I31柜 A面 4层
                  </Descriptions.Item>
                  <Descriptions.Item label="状态">
                    在馆2册 可借阅
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card
              cover={
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  alt="example"
                  src="http://www.hanhuikrkr.com:7112/swsm.jpg"
                />
              }
              actions={[
                <a href="https://book.douban.com/subject/26997376/">
                  查看详情
                </a>,
              ]}
            >
              <h3
                style={{
                  color: "red",
                  fontFamily: "楷体",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                《我是猫》
              </h3>
              <div style={{ float: "left" }}>
                <Descriptions column={{ lg: 1, sm: 1, md: 1 }}>
                  <Descriptions.Item label="作者">
                    [日]夏目漱石
                  </Descriptions.Item>
                  <Descriptions.Item label="ISBN">
                    9787506380263
                  </Descriptions.Item>
                  <Descriptions.Item label="馆藏位置">
                    3楼 西座 I31柜 A面 4层
                  </Descriptions.Item>
                  <Descriptions.Item label="状态">借阅中</Descriptions.Item>
                </Descriptions>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Lib;
