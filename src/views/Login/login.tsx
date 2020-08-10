import React from "react";
import "./login.css";
import {API} from "../../service/index.service";
import utils from "../../helper/utils/utils";
import constant from "../../constant/constant";
import { createBrowserHistory } from "history";
import axios from "axios";
import apiUrl from "../../helper/apicontroller/apicontroller";
import { loginCreateRequest } from "../../modelcontroller";
const $ = require('jquery');

const history = createBrowserHistory();

class Login extends React.Component<{ history: any }> {
  loginState = constant.loginPage.state;
  state = {
    password: this.loginState.password,
    passworderror: this.loginState.passworderror,
    email: this.loginState.email,
    emailerror: this.loginState.emailerror,
    type: this.loginState.type,
    mobile: this.loginState.mobile,
    mobileerror: this.loginState.mobileerror,
    isModel: this.loginState.isModel,
    id: this.loginState.id,
    otp: this.loginState.otp,
    otperror: this.loginState.otperror,
    reqToken: this.loginState.reqToken,
    newpassword: this.loginState.newpassword,
    newpassworderror: this.loginState.newpassworderror
  };

  constructor(props: any) {
    super(props);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleChangeEventPassword = this.handleChangeEventPassword.bind(this);
    this.login = this.login.bind(this);
    this.forgotpassword = this.forgotpassword.bind(this);
    this.verifyOtp = this.verifyOtp.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  async componentDidMount() {
    document.title = constant.login + utils.getAppName();
    $(document).ready(function () {

    });
  }

  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleChangeEventPassword(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleClick = () =>
    this.setState(({ type }: any) => ({
      type: type === "password" ? "text" : "password",
    }));

  validate() {
    let emailerror = "";
    let passworderror = "";

    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email) {
      emailerror = "please enter email";
    } else if (!reg.test(this.state.email)) {
      emailerror = "please enter valid email";
    }

    if (!this.state.password) {
      passworderror = "please enter password";
    }

    if (emailerror || passworderror) {
      this.setState({ emailerror, passworderror });
      return false;
    }
    return true;
  }

  validatePassword() {
    let mobileerror = "";

    const number: any = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    if (!this.state.mobile) {
      mobileerror = "please enter mobile number";
    } else if (!number.test(this.state.mobileerror)) {
      mobileerror = "please enter valid  mobile number";
    }

    if (mobileerror) {
      this.setState({ mobileerror });
      return false;
    }
    return true;
  }

  async forgotpassword() {
    const isValid = this.validatePassword();
    if (isValid) {
      this.setState({
        mobileerror: this.state.mobileerror = "",
      });
      if (this.state.mobile) {
        const obj = {
          mobile: this.state.mobile,
        };
        var forgotPassword = await API.forgotPassword(obj);
        console.log("forgotPassword", forgotPassword);

        if (forgotPassword.statusCode === 200) {
          var ele = document.getElementById('myModal');
          if (ele != null) {
            ele.style.display = 'none';
          }
          const msg = forgotPassword.message;
          utils.showSuccess(msg);
          this.setState({
            id: this.state.id = forgotPassword.data.userId,
            otp: this.state.otp = forgotPassword.data.otp,
            isModel: this.state.isModel = true
          })
          var element = document.getElementById('isModal');
          console.log(element);
          if (element != null) {
            element.style.display = 'block';
          }
        } else {
          const msg1 = forgotPassword.message;
          utils.showError(msg1);
        }
      }
    }
  }

  async verifyOtp() {
    if (this.state.otp !== null && this.state.id !== null) {
      const obj = {
        id: this.state.id,
        otp: this.state.otp
      };
      var otpVerify = await API.otpVerify(obj);
      console.log("otpVerify", otpVerify);
      if (otpVerify.statusCode === 200) {
        var ele = document.getElementById('isModal');
        if (ele != null) {
          ele.style.display = 'none';
        }
        const msg = otpVerify.message;
        utils.showSuccess(msg);
        this.setState({
          id: this.state.id = otpVerify.data.userId,
          reqToken: this.state.reqToken = otpVerify.data.reqToken
        })
        var element = document.getElementById('resetModal');
        console.log(element);
        if (element != null) {
          element.style.display = 'block';
        }
      } else {
        const msg = otpVerify.message;
        utils.showSuccess(msg);
      }
    }
  }

  async resetPassword() {
    if (this.state.id !== null && this.state.reqToken !== null) {
      const obj = {
        id: this.state.id,
        reqToken: this.state.reqToken,
        password: this.state.newpassword
      };
      var resetPassword = await API.resetPassword(obj);
      console.log("resetPassword", resetPassword);
      if (resetPassword.statusCode === 200) {
        var ele = document.getElementById('resetModal');
        if (ele != null) {
          ele.style.display = 'none';
        }
        const msg = resetPassword.messageCode;
        utils.showSuccess(msg);
      } else {
        const msg = resetPassword.message;
        utils.showSuccess(msg);
      }
    }
  }

  async login() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        emailerror: this.state.emailerror = "",
        passworderror: this.state.passworderror = "",
      });
      if (this.state.email && this.state.password) {
        const obj: loginCreateRequest = {
          email: this.state.email,
          password: this.state.password,
        };

        axios
          .post(constant.apiUrl + apiUrl.userController.createData, obj)
          .then((res: any) => {
            console.log("response", res);
            if(res.status === 200) {
              var userData = res.data;
              localStorage.setItem("user", JSON.stringify(userData));
              localStorage.setItem("token", userData.token);
              const msg = "Login Successfully";
              utils.showSuccess(msg);
              this.props.history.push("/dashboard");
            } else {
              const msg = "Server Error";
              utils.showSuccess(msg);
            }
          })
          .catch((err: any) => {
            const msg = "Internal server error";
            utils.showError(msg);
          });

        // var loginUser = await API.loginUser(obj);
        // console.log("loginuser",loginUser);

        // if(loginUser.data != null) {
        //   var userData=loginUser.data;
        //   localStorage.setItem('user',JSON.stringify(userData));
        //   localStorage.setItem('token',userData.reqToken);
        //   const msg = "Login Successfully";
        //   utils.showSuccess(msg);
        //     this.props.history.push("/dashboard");
        // } else {
        //     const msg1 = "Error";
        //     utils.showError(msg1);
        //   }

        // if (
        //   this.state.email === obj.email &&
        //   this.state.password === obj.password
        // ) {
        //   const msg = "Login Successfully";
        //   utils.showSuccess(msg);
        // } else {
        //   const msg1 = "Error";
        //   utils.showError(msg1);
        // }
      }
    }
  }

  render() {
    return (
      <div>
        <div className="main-div">
          <div className="login-form">
            <div className="left-box">
              <img src="../../assets/img/login-img.jpg" alt="" />
            </div>
            <div className="right-box">
              <h1>Login to Account</h1>
              <form>
                <div>
                  <label className="login">{constant.loginPage.title.email}</label>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="validationCustom08"
                        placeholder="Email Address"
                        onChange={this.handleChangeEvent}
                      />
                    </div>
                    <div className="mb-4 text-danger">
                      {this.state.emailerror}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="login">{constant.loginPage.title.password}</label>
                  <div className="form-group">
                    <div className="right-inner-addon input-group">
                      <input
                        type={this.state.type}
                        name="password"
                        className="form-control"
                        id="validationCustom09"
                        placeholder="Password"
                        onChange={this.handleChangeEvent}
                      />
                      {this.state.type === "password" ? (
                        <i onClick={this.handleClick} className="fas fa-eye" />
                      ) : (
                          <i
                            onClick={this.handleClick}
                            className="fas fa-eye-slash"
                          />
                        )}
                    </div>
                    <div className="mb-4 text-danger">
                      {this.state.passworderror}
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="for-pass"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  {constant.loginPage.title.forgotpassword}?
                </a>
                <button type="button" onClick={this.login}>
                  {constant.loginPage.title.signin}
                </button>
              </form>
            </div>
          </div>
          <div className="modal p-box" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    style={{ width: "auto" }}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <h3>{constant.loginPage.title.forgotpassword}?</h3>
                  <p>{constant.loginPage.title.recover}</p>
                  <div className="form-group">
                    <input
                      id="mobileno"
                      type="text"
                      name="mobile"
                      className="input-box"
                      placeholder="Enter your mobile number"
                      onChange={this.handleChangeEventPassword}
                    />
                    <div className="mb-4 text-danger">
                      {this.state.mobileerror}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-re-pass"
                    style={{ width: "fit-content" }}
                    onClick={this.forgotpassword}
                  >
                    {constant.loginPage.title.getotp}
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="modal p-box" id="isModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    style={{ width: "auto" }}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <h3>{constant.loginPage.title.verifyotp}</h3>
                  <label className="login">{constant.loginPage.title.enterotp}:</label>
                  <div className="form-group">
                    <input
                      id="otp"
                      type="number"
                      name="otp"
                      className="input-box"
                      placeholder="Enter your otp"
                      onChange={this.handleChangeEvent}
                    />
                    <div className="mb-4 text-danger">
                      {this.state.otperror}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-re-pass"
                    style={{ width: "fit-content" }}
                    onClick={this.verifyOtp}
                  >
                    {constant.loginPage.title.verify}
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="modal p-box" id="resetModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    style={{ width: "auto" }}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <h3>{constant.loginPage.title.resetpassword}</h3>
                  <label>{constant.loginPage.title.newpassword}</label>
                  <div className="form-group">
                    <div className="right-inner-addon input-group">
                      <input
                        id="newpassword"
                        type={this.state.type}
                        name="newpassword"
                        className="form-control"
                        placeholder="Enter your new password"
                        onChange={this.handleChangeEvent}
                      />
                      {this.state.type === "password" ? (
                        <i onClick={this.handleClick} className="fas fa-eye" />
                      ) : (
                          <i
                            onClick={this.handleClick}
                            className="fas fa-eye-slash"
                          />
                        )}
                    </div>
                    <div className="mb-4 text-danger">
                      {this.state.newpassworderror}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-re-pass"
                    style={{ width: "fit-content" }}
                    onClick={this.resetPassword}
                  >
                    {constant.loginPage.title.savepassword}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
