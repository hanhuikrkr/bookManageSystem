/*
 * @Author: your name
 * @Date: 2020-12-08 14:56:35
 * @LastEditTime: 2020-12-28 00:40:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bookManageSystem\front\bookmanage\src\App.jsx
 * https://www.lib.pku.edu.cn/portal/
 */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Head from "../../component/Head";
import "../../style/globalStyle.scss";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Card,
  Avatar,
  Divider,
  Descriptions,
  Badge,
  List,
  Space,
  Table,
  Tag,
  Tooltip,
  Modal,
  Steps,
  Input,
  Result,
} from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  BookOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  ExclamationOutlined,
  ReadOutlined,
  BarcodeOutlined,
  IdcardOutlined,
  ContainerOutlined,
  EyeOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import { MessageOutlined, StarOutlined } from "@ant-design/icons";

import { Statistic, Row, Col } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";
import { computed } from "mobx";
import "./Center.scss";
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    key: i,
    title: `书名：我是狗熊`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description: "您在 2020年12月24日 17点30分 借阅了该书 记得按时归还哦",
    content:
      "内容简介：本书抄袭剽窃了著名小说：《我是猫》，讲述的一只令和年间的狗熊",
  });
}
const columns = [
  {
    title: "书名",
    dataIndex: "书名",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "ISBN",
    dataIndex: "ISBN",
    key: "ISBN",
  },
  {
    title: "分类号",
    dataIndex: "分类号",
    key: "class",
  },
  {
    title: "标签",
    key: "标签",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 3 ? "geekblue" : "green";
          if (tag === "无赖派文学") {
            color = "volcano";
          }
          if (tag === "讽刺") {
            color = "red";
          }
          if (tag === "模糊式爱情") {
            color = "pink";
          }
          if (tag === "推理") {
            color = "default";
          }
          if (tag === "有毒") {
            color = "purple";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: "作者",
    dataIndex: "作者",
    key: "athur",
  },
  {
    title: "借阅时间",
    dataIndex: "借阅时间",
    key: "btime",
  },
  {
    title: "逾期时间",
    dataIndex: "逾期时间",
    key: "etime",
  },
  {
    title: "状态",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <>
        {status === "已归还" && (
          <div style={{ color: "green" }}>
            <CheckOutlined /> &nbsp;{status}
          </div>
        )}
        {status === "已逾期" && (
          <div style={{ color: "red" }}>
            <ExclamationOutlined /> &nbsp;{status}
          </div>
        )}{" "}
        {status === "借阅中" && (
          <div style={{ color: "blue", marginLeft: "3px" }}>
            <ReadOutlined /> &nbsp;{status}
          </div>
        )}
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    书名: "人间失格",
    ISBN: "9787506380263",
    分类号: "I31",
    作者: "[日]太宰治",
    tags: ["日本文学", "悲观", "无赖派文学"],
    借阅时间: "2020年12月17日 16点38分",
    逾期时间: "2021年5月17日 16点38分",
    status: "已归还",
  },
  {
    key: "2",
    书名: "我是猫",
    ISBN: "9787510851131",
    分类号: "I31",
    作者: "[日]夏目漱石",
    tags: ["日本文学", "讽刺"],
    借阅时间: "2020年6月17日 16点38分",
    逾期时间: "2020年11月17日 16点38分",
    status: "已逾期",
  },
  {
    key: "3",
    书名: "白夜行",
    ISBN: "9787544258609",
    分类号: "I31",
    作者: "[日]东野圭吾",
    tags: ["日本文学", "推理", "模糊式爱情"],
    借阅时间: "2020年12月17日 16点38分",
    逾期时间: "2021年5月17日 16点38分",
    status: "借阅中",
  },
  {
    key: "4",
    书名: "我是狗熊",
    ISBN: "978754422333",
    分类号: "B825",
    作者: "猫熊",
    tags: ["假的", "有毒"],
    借阅时间: "2020年12月17日 16点38分",
    逾期时间: " 2021年5月24日 17点30分",
    status: "借阅中",
  },
  {
    key: "5",
    书名: "我是狗熊",
    ISBN: "978754422333",
    分类号: "B825",
    作者: "猫熊",
    tags: ["假的", "有毒"],
    借阅时间: " 2020年12月24日 17点30分",
    逾期时间: " 2021年5月24日 17点30分",
    status: "借阅中",
  },
  {
    key: "6",
    书名: "我是狗熊",
    ISBN: "978754422333",
    分类号: "B825",
    作者: "猫熊",
    tags: ["假的", "有毒"],
    借阅时间: " 2020年12月24日 17点30分",
    逾期时间: " 2021年5月24日 17点30分",
    status: "借阅中",
  },
  {
    key: "7",
    书名: "我是狗熊",
    ISBN: "978754422333",
    分类号: "B825",
    作者: "猫熊",
    tags: ["假的", "有毒"],
    借阅时间: " 2020年12月24日 17点30分",
    逾期时间: " 2021年5月24日 17点30分",
    status: "借阅中",
  },
];

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const { Step } = Steps;
const TagList = ({ tags }) => {
  const ref = useRef(null);
  const [newTags, setNewTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showInput = () => {
    setInputVisible(true);

    if (ref.current) {
      // eslint-disable-next-line no-unused-expressions
      ref.current?.focus();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...newTags];

    if (
      inputValue &&
      tempsTags.filter((tag) => tag.label === inputValue).length === 0
    ) {
      tempsTags = [
        ...tempsTags,
        {
          key: `new-${tempsTags.length}`,
          label: inputValue,
        },
      ];
    }

    setNewTags(tempsTags);
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <div className="tags">
      <div className="tagsTitle">标签</div>
      {(tags || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {inputVisible && (
        <Input
          ref={ref}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{
            borderStyle: "dashed",
          }}
        >
          <PlusOutlined />
        </Tag>
      )}
    </div>
  );
};

@inject("userStore")
@observer
class Lib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current: 1,
      role: "",
      dayLimit: 0,
      booknumlimit: 0,
      visible: false,
      loading: false,
      currStep: 0,
    };
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let rolename = "";
    let day = 0;
    let book = 0;
    switch (parseInt(this.usr.role)) {
      case 1:
        rolename = "学生";
        day = 30;
        book = 10;
        break;
      case 0:
        rolename = "教师";
        day = 150;
        book = 30;
        break;
      case 2:
        rolename = "系主任";
        day = 150;
        book = 30;
        break;

      default:
        break;
    }
    this.setState({
      role: rolename,
      booknumlimit: book,
      dayLimit: day,
    });
  }
  @computed
  get usr() {
    return this.props.userStore.usr;
  }
  getStepData = () => {
    const steps = [
      {
        title: "输入",
        content: (
          <div style={{ color: "#0680cb" }}>
            <IdcardOutlined style={{ fontSize: "150px" }} />
            <br></br>
            <spn>请输入您借书证上的学号/工号，以确认续借此书</spn>
            <Input
              style={{ margin: "50px", width: "800px" }}
              size="large"
              placeholder="请输入您的学号/工号以确认续借"
              prefix={<UserOutlined />}
            />
          </div>
        ),
      },
      {
        title: "确认",
        content: (
          <div style={{ color: "#0680cb" }}>
            <Descriptions
              column={{ lg: 2, sm: 1, md: 1 }}
              style={{ margin: "50px" }}
              bordered={true}
            >
              <Descriptions.Item label="书名">白夜行</Descriptions.Item>
              <Descriptions.Item label="ISBN">9787506380263</Descriptions.Item>
              <Descriptions.Item label="续借至">
                2021年11月24日 17点30分
              </Descriptions.Item>
              <Descriptions.Item label="借阅人">
                {this.props.userStore.usr.name}
              </Descriptions.Item>
              <Descriptions.Item label="状态">借阅中</Descriptions.Item>
              <Descriptions.Item label="借阅状态">
                <Badge status="processing" text="正常" />
              </Descriptions.Item>
            </Descriptions>
            <spn>请确认信息是否准确无误</spn>
          </div>
        ),
      },
      {
        title: "提交",
        content: (
          <Result
            icon={<HourglassOutlined />}
            title="您的续借申请已成功提交"
            subTitle="请您耐心等待1-2个工作日，管理员将审批您的申请"
            extra={
              <Button type="primary" onClick={this.next}>
                若审核通过
              </Button>
            }
          />
        ),
      },
      {
        title: "完成",
        content: (
          <Result
            status="success"
            title="您续借的申请已成功通过！"
            subTitle="逾期日期更新为：   2021年11月24日 17点30分"
          />
        ),
      },
    ];
    return steps;
  };

  handleClick = (e) => {
    console.log("click ", e.key);
    this.setState({ current: e.key });
  };
  onTabChange = (key) => {
    // If you need to sync state to url
    // const { match } = this.props;
    // router.push(`${match.url}/${key}`);
    this.setState({
      tabKey: key,
    });
  };
  renderChildrenByTabKey = (tabKey) => {
    if (tabKey === "projects") {
      return <Projects />;
    }

    if (tabKey === "applications") {
      return <Applications />;
    }

    if (tabKey === "articles") {
      return <Articles />;
    }

    return null;
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  next = () => {
    this.setState({ currStep: this.state.currStep + 1 });
  };

  prev = () => {
    this.setState({ currStep: this.state.currStep - 1 });
  };
  render() {
    const { current } = this.state;
    const { visible, loading } = this.state;
    const { currStep } = this.state;
    const steps = this.getStepData();
    if (!this.usr.role) return <Redirect to="/login" />;
    return (
      <>
        <div className="g-head">
          <Head></Head>
        </div>
        <div className="g-person">
          <Layout style={{ backgroundColor: "#ffffff" }}>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{
                overflow: "auto",
                float: "top",
                backgroundColor: "#ffffff",
                collapsedWidth: "0",
              }}
            >
              <div className="logo" />
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="light"
                style={{ height: "80vh" }}
                onClick={this.handleClick}
                selectedKeys={[current]}
              >
                <Menu.Item key="1" icon={<UserOutlined />}>
                  查看个人信息
                </Menu.Item>

                <Menu.Item key="2" icon={<BarChartOutlined />}>
                  借书记录查询
                </Menu.Item>
                <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
                  续借申请
                </Menu.Item>
                <Menu.Item
                  key="4"
                  icon={<LogoutOutlined />}
                  onClick={() => {
                    this.props.userStore.logout();
                  }}
                >
                  退出登录
                </Menu.Item>
              </Menu>
              <Button
                type="primary"
                onClick={this.toggleCollapsed}
                style={{ marginBottom: 16 }}
              >
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
              </Button>
            </Sider>
            <Layout style={{ backgroundColor: "#ffffff" }}>
              <Content
                style={{
                  margin: "24px",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
              >
                {current == 1 && (
                  <div>
                    <div style={{ padding: 24, textAlign: "center" }}>
                      <Row gutter={24}>
                        <Col lg={7} md={24}>
                          <Card
                            bordered={false}
                            style={{
                              marginBottom: 24,
                            }}
                          >
                            <div>
                              <div className="avatarHolder">
                                <img
                                  alt=""
                                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                />
                                <div className="name">{this.usr.name}</div>
                                <div>{this.state.role}</div>
                              </div>
                              <Divider dashed />
                              <Descriptions
                                title="User Info"
                                column={{ lg: 2, sm: 1, md: 1 }}
                              >
                                <Descriptions.Item label="最大可借">
                                  {this.state.booknumlimit}本
                                </Descriptions.Item>
                                <Descriptions.Item label="最大可借时长">
                                  {this.state.dayLimit}日
                                </Descriptions.Item>
                                <Descriptions.Item label="尚未归还">
                                  3本
                                </Descriptions.Item>
                                <Descriptions.Item label="借阅状态">
                                  <Badge status="processing" text="正常" />
                                </Descriptions.Item>
                                <Descriptions.Item label="开户时间">
                                  2018-04-24 18:00:00
                                </Descriptions.Item>
                                <Descriptions.Item label="最近借阅">
                                  2020-10-24 18:00:00
                                </Descriptions.Item>

                                <Descriptions.Item label="账户余额">
                                  $80.00
                                </Descriptions.Item>
                                <Descriptions.Item label="待支付">
                                  $20.00
                                </Descriptions.Item>
                              </Descriptions>
                              <Divider
                                style={{
                                  marginTop: 16,
                                }}
                                dashed
                              />
                              <div className="team">
                                <div className="teamTitle">借阅情况</div>
                                <br></br>
                                <Row gutter={36}>
                                  <Col span={12}>
                                    <Statistic
                                      title="累计在馆时间"
                                      value={1128}
                                      suffix="小时"
                                      prefix={<ClockCircleOutlined />}
                                    />
                                  </Col>
                                  <Col span={12}>
                                    <Statistic
                                      title="共借阅"
                                      value={93}
                                      suffix="本书"
                                      prefix={<BookOutlined />}
                                    />
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Card>
                        </Col>
                        <Col lg={2} md={0} />
                        <Col lg={15} md={24}>
                          <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                              onChange: (page) => {
                                console.log(page);
                              },
                              pageSize: 5,
                            }}
                            dataSource={listData}
                            renderItem={(item) => (
                              <List.Item
                                style={{ textAlign: "left" }}
                                key={item.title + item.key}
                                extra={
                                  <img
                                  style={{
                                    height: "102px",
                                    width: "172px",
                                    objectFit: "cover",
                                  }}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                  />
                                }
                              >
                                <List.Item.Meta
                                  style={{ textAlign: "left" }}
                                  title={<a href={item.href}>{item.title}</a>}
                                  description={item.description}
                                />
                                {item.content}
                              </List.Item>
                            )}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                )}
                {current == 2 && (
                  <div>
                    <Table columns={columns} dataSource={data} />
                  </div>
                )}
                {current == 3 && (
                  <div>
                    <Modal
                      visible={visible}
                      title="申请续借"
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={[]}
                      width={1000}
                    >
                      <div style={{ height: "60vh" }}>
                        <Steps current={currStep}>
                          {steps.map((item) => (
                            <Step key={item.title} title={item.title} />
                          ))}
                        </Steps>
                        <div className="steps-content">
                          {steps[currStep].content}
                        </div>
                        <div className="steps-action">
                          {currStep < steps.length - 3 && (
                            <Button
                              type="primary"
                              onClick={this.next}
                              style={{ margin: "0 8px" }}
                            >
                              下一步
                            </Button>
                          )}
                          {currStep === steps.length - 3 && (
                            <Button
                              type="primary"
                              onClick={this.next}
                              style={{ margin: "0 8px" }}
                            >
                              提交申请
                            </Button>
                          )}
                          {currStep === steps.length - 1 && (
                            <Button
                              type="primary"
                              onClick={this.handleOk}
                              style={{ margin: "0 8px" }}
                            >
                              返回
                            </Button>
                          )}
                          {currStep > 0 && currStep < steps.length - 2 && (
                            <Button
                              style={{ margin: "0 8px" }}
                              onClick={this.prev}
                            >
                              上一步
                            </Button>
                          )}
                          {currStep < steps.length - 2 && (
                            <Button
                              key="back"
                              onClick={this.handleCancel}
                              style={{ margin: "0 8px" }}
                            >
                              取消申请
                            </Button>
                          )}
                        </div>
                      </div>
                    </Modal>
                    <Row gutter={24} style={{margin:"10px"}}>
                      <Col lg={6} md={12} sm={24}>
                        <Card
                          cover={
                            <img
                              style={{
                                height: "400px",
                                width: "100%",
                                objectFit: "cover",
                              }}
                              alt="example"
                              src="http://www.hanhuikrkr.com:7112/sbyx.jpg"
                            />
                          }
                          actions={[
                            <Tooltip title="扫描条形码续借">
                              <BarcodeOutlined
                                key="setting"
                                style={{ fontSize: "30px" }}
                                onClick={this.showModal}
                              />
                            </Tooltip>,

                            <Tooltip title="使用借阅卡续借">
                              <IdcardOutlined
                                key="setting"
                                style={{ fontSize: "30px" }}
                                onClick={this.showModal}
                              />
                            </Tooltip>,
                            <Tooltip title="直接申请续借">
                              <ContainerOutlined
                                key="setting"
                                style={{ fontSize: "30px" }}
                                onClick={this.showModal}
                              />
                            </Tooltip>,
                          ]}
                        >
                          <div style={{ float: "left" }}>
                            <Descriptions column={{ lg: 1, sm: 1, md: 1 }}>
                              <Descriptions.Item label="ISBN">
                                9787506380263
                              </Descriptions.Item>
                              <Descriptions.Item label="可续借至">
                                2021年11月24日 17点30分
                              </Descriptions.Item>
                              <Descriptions.Item label="状态">
                                借阅中
                              </Descriptions.Item>
                              <Descriptions.Item label="借阅状态">
                                <Badge status="processing" text="正常" />
                              </Descriptions.Item>
                            </Descriptions>
                          </div>
                        </Card>
                      </Col>
                      <Col lg={6} md={12} sm={24}>
                        <Card
                          cover={
                            <img
                            style={{
                              height: "400px",
                              width: "100%",
                              objectFit: "cover",
                            }}
                              alt="example"
                              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                          }
                          actions={[
                            <Tooltip title="扫描条形码续借">
                              <BarcodeOutlined
                                key="setting"
                                style={{ fontSize: "30px" }}
                                onClick={this.showModal}
                              />
                            </Tooltip>,

                            <Tooltip title="使用借阅卡续借">
                              <IdcardOutlined
                                key="setting"
                                style={{ fontSize: "30px" }}
                                onClick={this.showModal}
                              />
                            </Tooltip>,
                            <Tooltip title="直接申请续借">
                              <ContainerOutlined
                                key="setting"
                                style={{ fontSize: "30px" }}
                                onClick={this.showModal}
                              />
                            </Tooltip>,
                          ]}
                        >
                          <div style={{ float: "left" }}>
                            <Descriptions column={{ lg: 1, sm: 1, md: 1 }}>
                              <Descriptions.Item label="ISBN">
                                9787506380263
                              </Descriptions.Item>
                              <Descriptions.Item label="可续借至">
                                2021年11月24日 17点30分
                              </Descriptions.Item>
                              <Descriptions.Item label="状态">
                                借阅中
                              </Descriptions.Item>
                              <Descriptions.Item label="借阅状态">
                                <Badge status="processing" text="正常" />
                              </Descriptions.Item>
                            </Descriptions>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )}
                {current == 4 && <div></div>}
              </Content>
              <Footer
                style={{ textAlign: "center", backgroundColor: "#ffffff" }}
              >
                Hangzhou Normal University Library ©2020 Created by HZNU.Han
              </Footer>
            </Layout>
          </Layout>
        </div>
      </>
    );
  }
}

export default Lib;
