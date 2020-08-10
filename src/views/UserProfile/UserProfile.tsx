import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Col,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import "./userprofile.css";
// import NavBar from '../navbar/navbar';
import API from "../../service/user.service";
import constant from "../../constant/constant";
import utils from "../../helper/utils/utils";
import Layout from "../../layouts/Admin";
import EventEmitter from '../../event';
// import { profileUpdateRequest, profileListRequest } from '../../modelController/profileModel';

class UserProfile extends React.Component {
  state = {
    selectedFile: "",
    name: "",
    nameerror: "",
    lastname: "",
    lastnameerror: "",
    email: "",
    emailerror: "",
    mobilenumber: 0,
    mobilenumbererror: "",
    selectedFileerror: "",
    file: "",
    filetrue: false,
    filepath: "",
    role: "",
  };

  constructor(props: any) {
    super(props);
    this.Profile = this.Profile.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.removeIcon = this.removeIcon.bind(this);
  }

  async componentDidMount() {
    document.title = constant.profile + utils.getAppName();

    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);

    const obj = {
      id: user.userId,
      reqToken: user.reqToken,
    };

    const getProfile = await API.getProfile(obj);
    console.log("getprofile", getProfile);

    if (getProfile.statusCode === 200) {
      this.setState({
        filetrue: this.state.filetrue = true,
        name: this.state.name = getProfile.data.userDetail.name,
        email: this.state.email = getProfile.data.userDetail.email,
        mobilenumber: this.state.mobilenumber =
          getProfile.data.userDetail.mobile,
        file: this.state.file = getProfile.data.userDetail.profilePicture,
        role: this.state.role = getProfile.data.userDetail.role,
      });
    }
  }

  validate() {
    let nameerror = "";
    let emailerror = "";

    if (!this.state.name) {
      nameerror = "please enter name";
    }

    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email) {
      emailerror = "please enter email";
    } else if (!reg.test(this.state.email)) {
      emailerror = "please enter valid email";
    }

    if (nameerror || emailerror) {
      this.setState({
        nameerror,
        emailerror,
      });
      return false;
    }
    return true;
  }

  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  async Profile() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        nameerror: "",
        emailerror: "",
      });
      if (this.state.name && this.state.email && this.state.role) {
        const users: any = localStorage.getItem("user");
        let user = JSON.parse(users);

        const obj = {
          user: {
            _id: user.userId,
          },
          username: this.state.name,
          role: this.state.role,
        };

        const updateProfile = await API.updateProfile(obj);
        console.log("updateProfile", updateProfile);

        if (updateProfile.statusCode === 200) {
          localStorage.setItem('user-profile',this.state.file);
          let userprofile:any = localStorage.getItem('user-profile');
          const photo = userprofile;
          EventEmitter.dispatch('imageUpload', photo);
          const msg = updateProfile.messageCode;
          utils.showSuccess(msg);

        } else {
          const msg = updateProfile.messageCode;
          utils.showSuccess(msg);
        }
      }
    }
  }

  async onChangeHandler(event: any) {
    // let data = new FormData();
    // data.append('file_name', event.target.files[0]);
    // console.log("event",event.target.files[0].name);
    this.setState({
      selectedFile: this.state.selectedFile = event.target.files,
    });
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = (ev) => {
      this.setState({
        file: reader.result,
      });
    };

    const users: any = localStorage.getItem("user");
    let user = JSON.parse(users);

    let formData = new FormData();

    formData.append("id", user.userId.toString());
    formData.append("profile", this.state.selectedFile[0]);

    const updateProfilePicture = await API.updateProfilePicture(formData);
    console.log("updateProfilePicture", updateProfilePicture);

    if (updateProfilePicture.statusCode === 200) {
      const msg = updateProfilePicture.messageCode;
      utils.showSuccess(msg);
    } else {
      const msg = updateProfilePicture.messageCode;
      utils.showSuccess(msg);
    }
  }

  removeIcon() {
    this.setState({
      file: this.state.file = "",
    });
  }

  render() {
    return (
      <Layout>
        <div className="row">
          <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <Card>
              <CardHeader>
                <strong className="maincontent">My Profile</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <FormGroup className="img-upload">
                      {this.state.file != "" ? (
                        <div className="img-size">
                          {this.state.file ? (
                            <div>
                              {this.state.filetrue === true ? (
                                <img
                                  className="picture"
                                  src={this.state.file}
                                />
                              ) : (
                                <img
                                  className="picture"
                                  src={this.state.file}
                                />
                              )}
                              <i
                                className="fa fa-times cursor"
                                onClick={() => this.removeIcon()}
                              />
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="">
                          <p>
                            <b>User Image:</b>
                          </p>
                          <Label className="imag" for="file-input">
                            <i
                              className="fa fa-upload fa-lg"
                              style={{ color: "#20a8d8" }}
                            />
                          </Label>
                          <Input
                            id="file-input"
                            type="file"
                            className="form-control"
                            name="file"
                            onChange={this.onChangeHandler.bind(this)}
                          />
                        </div>
                      )}
                      <div className="text-danger">
                        {this.state.selectedFileerror}
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChangeEvent}
                        placeholder="Enter your name"
                        required
                      />
                      <div className="mb-4 text-danger">
                        {this.state.nameerror}
                      </div>
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <FormGroup>
                      <Label htmlFor="profile">E-Mail</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        className="profile form-control"
                        value={this.state.email}
                        onChange={this.handleChangeEvent}
                        placeholder="Enter your email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6" xl="6">
                    <FormGroup>
                      <Label htmlFor="mobile_no">Mobile Number</Label>
                      <Input
                        type="text"
                        id="mobile_no"
                        name="mobilenumber"
                        className="form-control"
                        value={this.state.mobilenumber}
                        onChange={this.handleChangeEvent}
                        placeholder="Enter your mobile number"
                        disabled
                      />
                      <div className="mb-4 text-danger">
                        {this.state.mobilenumbererror}
                      </div>
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  type="button"
                  size="sm"
                  className="mb-2 mr-2 custom-button"
                  color="primary"
                  onClick={this.Profile}
                >
                  Update
                </Button>
              </CardBody>
            </Card>
          </Col>
        </div>
      </Layout>
    );
  }
}

export default UserProfile;
