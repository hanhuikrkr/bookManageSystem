import {
  Menu,
  Cascader,
  Input,
  Select,
  Descriptions,
  Button,
  Badge,
  Result,
  Row,
  Col,
  Card,
  Modal,
  Steps,
  Tooltip,
  Divider,
} from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  IdcardOutlined,
  UserOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import reNotification from "../../component/Notification";
import { createFromIconfontCN } from "@ant-design/icons";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import "./style.scss";
import { books } from "../../constant/data";
import { withRouter } from "react-router-dom";
const { SubMenu } = Menu;
const { Search } = Input;
const { Step } = Steps;
const { Option } = Select;
function filter(inputValue, path) {
  return path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
}

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2296956_zuokwxp6spn.js",
});
@inject("BookStore", "userStore")
class Nav extends Component {
  state = {
    current: "mail",
    searchtype: 1,
    borModelVisiable: false,
    backModelVisiable: false,
    currStep: 0,
    stateText: "",
    backcurrstep: 0,
  };
  dropdownRender = (menus) => {
    return (
      <div
        style={{ width: "1160px", height: "600px", backgroundColor: "#ffffff" }}
      >
        {menus}

        <div
          onClick={() => this.changeType(1)}
          className="search-footBtn-class"
        >
          根据馆藏目录分类搜索
        </div>
        <div onClick={() => this.changeType(2)} className="search-footBtn-isbn">
          根据书名，ISBN码搜索
        </div>
      </div>
    );
  };
  changeType = (type) => {
    this.setState({
      searchtype: type,
    });
  };
  attentionAccur = () => {
    let step = this.state.currStep;
    if (step == 0) {
      reNotification.pop({
        type: "info",
        message: `没有读取到用户信息`,
        description: "请正确放置您的借阅卡/校园卡",
      });
    } else if (step == 1) {
      reNotification.pop({
        type: "warning",
        message: `没有读取到书籍信息`,
        description: `请正确放置您的${this.state.stateText}书籍`,
      });
    } else if (step == 2) {
      reNotification.pop({
        type: "error",
        message: `借阅失败`,
        description: "正在处理申请，请勿取走书籍，借阅卡/校园卡",
      });
    }
  };
  onChange = (value, selectedOptions) => {
    console.log(
      "select===>value" + value,
      "select===>selectedOptions" + selectedOptions
    );
    if (value == "I,I3,I31") {
      this.props.history.push("/lib");
    } else {
      this.props.history.push("/empty");
    }
  };
  attentionbackAccur = () => {
    let step = this.state.currStep;
    if (step == 0) {
      reNotification.pop({
        type: "warning",
        message: `没有读取到书籍信息`,
        description: `请正确放置您的${this.state.stateText}书籍`,
      });
    } else if (step == 1) {
      reNotification.pop({
        type: "error",
        message: `借阅失败`,
        description: "正在处理申请，请勿取走书籍，借阅卡/校园卡",
      });
    }
  };
  onBorrowClick = () => {
    this.setState({
      borModelVisiable: true,
      stateText: "借阅",
      stateInfoLastSubtitle: "请记得按时归还哦",
      currStep: 0,
    });
  };
  handleOk = () => {
    this.setState({
      borModelVisiable: false,
      backModelVisiable: false,
      currStep: 0,
    });
  };

  handleCancel = () => {
    this.setState({
      borModelVisiable: false,
      backModelVisiable: false,
      currStep: 0,
    });
  };
  getStepData = () => {
    const steps = [
      {
        title: "验证",
        content: (
          <div style={{ color: "#0680cb" }}>
            <div
              style={{
                width: "200px",
                paddingTop: "20px",
                paddingBottom: "20px",

                margin: "130px auto",
                marginBottom: "100px",
                borderRadius: "1rem",
                border: " 1px dashed #0680cb",
              }}
            >
              {" "}
              <IdcardOutlined style={{ fontSize: "100px" }} />
              <br></br>
            </div>

            <spn style={{ fontSize: "18px" }}>
              请在借阅机上放置您的读者借阅卡/校园卡
            </spn>
          </div>
        ),
      },
      {
        title: "放置",
        content: (
          <div style={{ color: "#0680cb" }}>
            <div
              style={{
                width: "200px",
                paddingTop: "20px",
                paddingBottom: "20px",

                margin: "130px auto",
                marginBottom: "100px",
                borderRadius: "1rem",
                border: " 1px dashed #0680cb",
              }}
            >
              {" "}
              <IconFont
                type="icon-shu"
                style={{ fontSize: "100px" }}
              ></IconFont>
              <br></br>
            </div>

            <spn style={{ fontSize: "18px" }}>
              请在借阅机上放置{this.state.stateText}的书籍
            </spn>
          </div>
        ),
      },
      {
        title: "确认",
        content: (
          <div
            style={{ color: "#0680cb", overflowY: "scroll", height: "40vh" }}
          >
            <Descriptions
              column={{ lg: 2, sm: 1, md: 1 }}
              style={{ margin: "50px" }}
              bordered={true}
            >
              <Descriptions.Item label="书名">白夜行</Descriptions.Item>
              <Descriptions.Item label="ISBN">9787544258609</Descriptions.Item>
              <Descriptions.Item label="逾期时间">
                2021年5月24日 17点30分
              </Descriptions.Item>
              <Descriptions.Item label="借阅人">
                {this.props.userStore.usr.name}
              </Descriptions.Item>
              <Descriptions.Item label="出版社">南海出版社</Descriptions.Item>
              <Descriptions.Item label="借阅书籍">
                <Badge status="processing" text="1/3册" />
              </Descriptions.Item>
            </Descriptions>
            <Descriptions
              column={{ lg: 2, sm: 1, md: 1 }}
              style={{ margin: "50px" }}
              bordered={true}
            >
              <Descriptions.Item label="书名">我是猫</Descriptions.Item>
              <Descriptions.Item label="ISBN">9787510851131</Descriptions.Item>
              <Descriptions.Item label="逾期时间">
                2021年5月24日 17点30分
              </Descriptions.Item>
              <Descriptions.Item label="借阅人">
                {this.props.userStore.usr.name}
              </Descriptions.Item>
              <Descriptions.Item label="出版社">九州出版社</Descriptions.Item>
              <Descriptions.Item label="借阅书籍">
                <Badge status="processing" text="2/3册" />
              </Descriptions.Item>
            </Descriptions>
            <Descriptions
              column={{ lg: 2, sm: 1, md: 1 }}
              style={{ margin: "50px" }}
              bordered={true}
            >
              <Descriptions.Item label="书名">人间失格</Descriptions.Item>
              <Descriptions.Item label="ISBN">9787506380263</Descriptions.Item>
              <Descriptions.Item label="逾期时间">
                2021年5月24日 17点30分
              </Descriptions.Item>
              <Descriptions.Item label="借阅人">
                {this.props.userStore.usr.name}
              </Descriptions.Item>
              <Descriptions.Item label="出版社">作家出版社</Descriptions.Item>
              <Descriptions.Item label="借阅书籍">
                <Badge status="processing" text="3/3册" />
              </Descriptions.Item>
            </Descriptions>
            <spn>请确认信息是否准确无误</spn>
          </div>
        ),
      },

      {
        title: "完成",
        content: (
          <Result
            style={{ marginTop: "100px" }}
            status="success"
            title={`您已成功${this.state.stateText}书籍！`}
            subTitle="请记得按时归还哦"
            extra={
              <Button style={{ color: "red" }} onClick={this.next}>
                若{this.state.stateText}失败
              </Button>
            }
          />
        ),
      },
      {
        title: "失败",
        content: (
          <Result
            style={{ marginTop: "100px" }}
            status="warning"
            title="您有逾期书籍尚未归还"
            subTitle="请在归还逾期书籍后，在来借阅新书哦"
          />
        ),
      },
    ];
    return steps;
  };
  getbackStepData = () => {
    const backsteps = [
      {
        title: "放置",
        content: (
          <div style={{ color: "#0680cb" }}>
            <div
              style={{
                width: "200px",
                paddingTop: "20px",
                paddingBottom: "20px",

                margin: "130px auto",
                marginBottom: "100px",
                borderRadius: "1rem",
                border: " 1px dashed #0680cb",
              }}
            >
              {" "}
              <IconFont
                type="icon-shu"
                style={{ fontSize: "100px" }}
              ></IconFont>
              <br></br>
            </div>

            <spn style={{ fontSize: "18px" }}>
              请在借阅机上放置{this.state.stateText}的书籍
            </spn>
          </div>
        ),
      },
      {
        title: "确认",
        content: (
          <div
            style={{ color: "#0680cb", overflowY: "scroll", height: "40vh" }}
          >
            <Descriptions
              column={{ lg: 2, sm: 1, md: 1 }}
              style={{ margin: "50px" }}
              bordered={true}
            >
              <Descriptions.Item label="书名">白夜行</Descriptions.Item>
              <Descriptions.Item label="ISBN">9787544258609</Descriptions.Item>
              <Descriptions.Item label="借阅时间">
                2020年12月24日 17点30分
              </Descriptions.Item>
              <Descriptions.Item label="借阅人">韩俊祺</Descriptions.Item>
              <Descriptions.Item label="状态">
                {" "}
                <Badge status="success" text="正常" />
              </Descriptions.Item>
              <Descriptions.Item label="借阅书籍">1/3册</Descriptions.Item>
            </Descriptions>
            <Descriptions
              column={{ lg: 2, sm: 1, md: 1 }}
              style={{ margin: "50px" }}
              bordered={true}
            >
              <Descriptions.Item label="书名">我是猫</Descriptions.Item>
              <Descriptions.Item label="ISBN">9787510851131</Descriptions.Item>
              <Descriptions.Item label="借阅时间">
                2020年1月24日 17点30分
              </Descriptions.Item>
              <Descriptions.Item label="借阅人">韩俊祺</Descriptions.Item>
              <Descriptions.Item label="状态">
                {" "}
                <Badge status="error" text="逾期" />
              </Descriptions.Item>
              <Descriptions.Item label="借阅书籍">1/3册</Descriptions.Item>
            </Descriptions>

            <Divider>异常归还</Divider>
            <Descriptions
              column={{ lg: 2, sm: 1, md: 1 }}
              style={{ margin: "50px" }}
              bordered={true}
            >
              <Descriptions.Item label="书名">人间失格</Descriptions.Item>
              <Descriptions.Item label="ISBN">9787506380263</Descriptions.Item>
              <Descriptions.Item label="借阅时间">
                无最近借阅记录
              </Descriptions.Item>
              <Descriptions.Item label="借阅人">
                无最近借阅借阅人
              </Descriptions.Item>
              <Descriptions.Item label="状态">
                {" "}
                <Badge status="warning" text="已在馆" />
              </Descriptions.Item>
              <Descriptions.Item label="借阅书籍">3/3册</Descriptions.Item>
            </Descriptions>
            <spn>请确认信息是否准确无误</spn>
          </div>
        ),
      },

      {
        title: "完成",
        content: (
          <Result
            style={{ marginTop: "100px" }}
            status="success"
            title={`您已成功${this.state.stateText}书籍！`}
            subTitle="请记得按时归还哦"
            extra={
              <Button style={{ color: "red" }} onClick={this.next}>
                若{this.state.stateText}失败
              </Button>
            }
          />
        ),
      },
      {
        title: "失败",
        content: (
          <Result
            style={{ marginTop: "20px" }}
            status="500"
            subTitle="发生了异常的错误，请联系附近工作人员"
          />
        ),
      },
    ];
    return backsteps;
  };
  next = () => {
    this.setState({ currStep: this.state.currStep + 1 });
  };

  prev = () => {
    this.setState({ currStep: this.state.currStep - 1 });
  };
  onBackClick = () => {
    this.setState({
      backModelVisiable: true,
      stateText: "归还",
      stateInfoLastSubtitle: "欢迎您再次使用杭师大图书馆管理系统",
    });
  };
  handleClick = (e) => {
    // console.log("click ", e);
    this.setState({ current: e.key });
  };
  onSearch = (value) => {
    this.props.history.push("/lib");
  };
  render() {
    const {
      current,
      searchtype,
      borModelVisiable,
      backModelVisiable,
      currStep,
    } = this.state;
    const steps = this.getStepData();
    const backstep = this.getbackStepData();
    return (
      <div className="g-nav-style">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="search" style={{ width: "60%" }}>
            {searchtype == 1 && (
              <Cascader
                options={books}
                onChange={this.onChange}
                placeholder="请选择书籍分类"
                dropdownRender={this.dropdownRender}
                popupClassName="nav-search-popup-style"
                showSearch={{ filter, matchInputWidth: true }}
                style={{ width: "100%", height: "100%" }}
              />
            )}
            {searchtype == 2 && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  alignSelf: "center",
                  alignItems: "center",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <Input.Group compact>
                  <Select
                    onChange={this.changeType}
                    defaultValue="2"
                    style={{ width: "30%" }}
                  >
                    <Option value="1"> 根据馆藏目录分类</Option>
                    <Option value="2"> 根据书名，ISBN码</Option>
                  </Select>
                  <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={this.onSearch}
                    style={{
                      width: "70%",
                      height: "100%",
                      alignContent: "center",
                      fontSize: "large",
                    }}
                  />
                </Input.Group>
              </div>
            )}
          </Menu.Item>

          <Menu.Item key="borrow" onClick={this.onBorrowClick}>
            <div
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                fontSize: "18px",
                fontFamily: "楷体",
              }}
            >
              借阅书籍
            </div>
          </Menu.Item>

          <Menu.Item key="back" onClick={this.onBackClick}>
            <div
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                fontSize: "18px",
                fontFamily: "楷体",
              }}
            >
              归还书籍
            </div>
          </Menu.Item>
        </Menu>
        <Modal
          destroyOnClose={true}
          visible={borModelVisiable}
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
            <div className="nav-steps-content">{steps[currStep].content}</div>
            <div className="nav-steps-action">
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
                  <Tooltip title="请确认信息是否准确无误">提交借阅</Tooltip>
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
                <Button style={{ margin: "0 8px" }} onClick={this.prev}>
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
              {currStep < steps.length - 2 && (
                <Button
                  key="attention"
                  onClick={this.attentionAccur}
                  style={{ float: "right", color: "red" }}
                >
                  异常发生
                </Button>
              )}
            </div>
          </div>
        </Modal>
        <Modal
          destroyOnClose={true}
          visible={backModelVisiable}
          title="归还书籍"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
          width={1000}
        >
          <div style={{ height: "60vh" }}>
            <Steps current={currStep}>
              {backstep.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="nav-steps-content">
              {currStep < backstep.length && backstep[currStep].content}
            </div>
            <div className="nav-steps-action">
              {currStep < backstep.length - 3 && (
                <Button
                  type="primary"
                  onClick={this.next}
                  style={{ margin: "0 8px" }}
                >
                  下一步
                </Button>
              )}
              {currStep === backstep.length - 3 && (
                <Button
                  type="primary"
                  onClick={this.next}
                  style={{ margin: "0 8px" }}
                >
                  <Tooltip title="请确认信息是否准确无误">提交归还</Tooltip>
                </Button>
              )}
              {currStep === backstep.length - 1 && (
                <Button
                  type="primary"
                  onClick={this.handleOk}
                  style={{ margin: "0 8px" }}
                >
                  返回
                </Button>
              )}
              {currStep > 0 && currStep < backstep.length - 2 && (
                <Button style={{ margin: "0 8px" }} onClick={this.prev}>
                  上一步
                </Button>
              )}
              {currStep < backstep.length - 2 && (
                <Button
                  key="back"
                  onClick={this.handleCancel}
                  style={{ margin: "0 8px" }}
                >
                  取消申请
                </Button>
              )}
              {currStep < backstep.length - 2 && (
                <Button
                  key="attention"
                  onClick={this.attentionbackAccur}
                  style={{ float: "right", color: "red" }}
                >
                  异常发生
                </Button>
              )}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Nav);
