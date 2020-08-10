import React from "react";
import { Link } from "react-router-dom";
// import utils from "../../../utils";
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
import "./adddelivery.css";

import constant from "../../../constant/constant";
// import {
//   userCreateRequest,
//   userUpdateRequest,
// } from "../../../modelController/userModel";
import { any } from "prop-types";
import Admin from "../../../layouts/Admin";
import utils from "../../../helper/utils/utils";

class AddDelivery extends React.Component<{ history: any }> {
  state = {
    userid:"",
    useriderror: "",
    dl:"",
    dlerror: "",
    idproof: "",
    idprooferror: "",
    registerationNumber: '',
    registerationNumbererror: "",
    vehicleFrontPhoto: "",
    vehicleFrontPhotoerror: "",
    vehicleBackPhoto: "",
    vehicleBackPhotoerror: "",
    rc: "",
    rcerror:"",
    areaID:"",
    areaIDerror:"",
    shopID:"",
    shopIDerror:"",
    file:null,
    selectedFile:'',
  };

  constructor(props: any) {
    super(props);
    // this.Profile = this.Profile.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onMainItemSelect = this.onMainItemSelect.bind(this);
    this.onSubItemSelect =  this.onSubItemSelect.bind(this);
    // this.addUser = this.addUser.bind(this);
    // this.editUser = this.editUser.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    // this.getUserRole = this.getUserRole.bind(this);
  }

  handleChange(checked: boolean) {
    this.setState({ checked });
  }

  async componentDidMount() {
    document.title = constant.addDelivery + utils.getAppName();
    // this.getUserRole();

    // const getProfile = await API.getProfile();
    // console.log("getprofile",getProfile);
  }


  // async getUserRole() {
  //     const getUserRole = await RoleAPI.getUserRole();

  //   if(getUserRole.resultObject != null) {
  //     this.setState({
  //       userrole : this.state.userrole = getUserRole.resultObject
  //     })

  //   } else {
  //     const msg1 = getUserRole.explanation;
  //     utils.showError(msg1);
  // }
  // }

  
  onChangeHandler(event: any) {
    // let data = new FormData();
    // data.append('file_name', event.target.files[0]);
    // console.log("event",event.target.files[0].name);
    
    this.setState({
      selectedFile: this.state.selectedFile =  event.target.files[0],
      file: this.state.file = event.target.files[0].name,
    });
  }

  
  removeIcon() {
    // const obj = {
    //     id: this.props.auth.auth_data.id,
    //     image_path: data
    // }
    this.setState({
      file: this.state.file = null,
    });
  }


  validate() {
    let useriderror = "";
    let dlerror = "";
    let idprooferror = "";
    let registerationNumbererror = "";
    let vehicleFrontPhotoerror = "";
    let vehicleBackPhotoerror = "";
    let rcerror = "";
    let areaIDerror = "";
    let shopIDerror = "";

    if (!this.state.userid) {
        useriderror = "please select user";
    }

    if (!this.state.dl) {
        dlerror = "please select dl file";
    }

    if (!this.state.idproof) {
        idprooferror = "please select id proof";
    }

    if (!this.state.registerationNumber) {
        registerationNumbererror = "please enter registration number";
    }

    if (!this.state.vehicleFrontPhoto) {
        vehicleFrontPhotoerror = "please select vehical front photo";
    }

    if (!this.state.vehicleBackPhoto) {
        vehicleBackPhotoerror = "please select vehical back photo";
    }

    if (!this.state.shopID) {
        shopIDerror = "please select shop";
    }

    if (!this.state.rc) {
        rcerror = "please select rc file";
    }

    if (!this.state.areaID) {
        areaIDerror = "please select area";
    }

    if (
      useriderror ||
      dlerror ||
      idprooferror ||
      registerationNumbererror ||
      vehicleFrontPhotoerror ||
      vehicleBackPhotoerror ||
      shopIDerror ||
      rcerror ||
      areaIDerror
    ) {
      this.setState({
        useriderror,
        dlerror,
        idprooferror,
        registerationNumbererror,
        vehicleFrontPhotoerror,
        vehicleBackPhotoerror,
        shopIDerror,
        rcerror,
        areaIDerror
      });
      return false;
    }
    return true;
  }

  onItemSelect(event: any) {
    // this.setState({
    //   roleid: this.state.roleid = event.target.options[event.target.selectedIndex].value,
    //   onItemSelect:this.state.onItemSelect = event.target.options[event.target.selectedIndex].innerHTML
    // });
  }

  
  onMainItemSelect(event: any) {
    // this.setState({
    //   roleid: this.state.roleid = event.target.options[event.target.selectedIndex].value,
    //   onItemSelect:this.state.onItemSelect = event.target.options[event.target.selectedIndex].innerHTML
    // });
  }

  
  onSubItemSelect(event: any) {
    // this.setState({
    //   roleid: this.state.roleid = event.target.options[event.target.selectedIndex].value,
    //   onItemSelect:this.state.onItemSelect = event.target.options[event.target.selectedIndex].innerHTML
    // });
  }

  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  // async addUser() {
  //   const isValid = this.validate();
  //   if (isValid) {
  //     this.setState({
  //       firstnameerror: "",
  //       lastnameerror: "",
  //       emailerror: "",
  //       mobilenumbererror: "",
  //       passworderror: "",
  //       onItemSelecterror: ""
  //     });
  //     if (
  //       this.state.firstname &&
  //       this.state.lastname &&
  //       this.state.email &&
  //       this.state.mobilenumber &&
  //       this.state.password &&
  //       this.state.selectedFile &&
  //       this.state.onItemSelect
  //     ) {

  //       let formData = new FormData();    

  //       formData.append('roleId', this.state.roleid.toString());   
  //       formData.append('firstName', this.state.firstname);
  //       formData.append('lastName', this.state.lastname);
  //       formData.append('email', this.state.email);
  //       formData.append('phone', this.state.mobilenumber.toString());
  //       formData.append('photo', '');
  //       formData.append('isActive','true');
  //       formData.append('files', new Blob(this.state.selectedFile));
  //       formData.append('userId', '0');

  //       const addUser:any = await API.addUser(formData);
  //       console.log("addUser",addUser);

  //       if(addUser.resultObject !== null) {
  //         const msg = "User Added Successfully";
  //         utils.showSuccess(msg);
  //         this.props.history.push("/users");
  //       } else {
  //         const msg1 = "Error";
  //           utils.showError(msg1);
  //       }
  //     }
  //   }
  // }

  // async editUser() {
  //   const isValid = this.validate();
  //   if (isValid) {
  //     this.setState({
  //       firstnameerror: "",
  //       lastnameerror: "",
  //       emailerror: "",
  //       mobilenumbererror: "",
  //       passworderror: "",
  //       onItemSelecterror: ""
  //     });
  //     if (
  //       this.state.firstname &&
  //       this.state.lastname &&
  //       this.state.email &&
  //       this.state.mobilenumber &&
  //       this.state.password &&
  //       this.state.selectedFile &&
  //       this.state.onItemSelect
  //     ) {

  //       let formData = new FormData();    

  //       formData.append('iD', this.state.roleid.toString());
  //       formData.append('roleId', this.state.roleid.toString());   
  //       formData.append('firstName', this.state.firstname);
  //       formData.append('lastName', this.state.lastname);
  //       formData.append('email', this.state.email);
  //       formData.append('phone', this.state.mobilenumber.toString());
  //       formData.append('photo', '');
  //       formData.append('isActive','true');
  //       formData.append('files', new Blob(this.state.selectedFile));
  //       formData.append('userId', '0');

  //       const addUser:any = await API.addUser(formData);
  //       console.log("addUser",addUser);

  //       if(addUser.resultObject !== null) {
  //         const msg = "User Added Successfully";
  //         utils.showSuccess(msg);
  //         this.props.history.push("/users");
  //       } else {
  //         const msg1 = "Error";
  //           utils.showError(msg1);
  //       }
  //     }
  //   }
  // }


  render() {
    return (
      <>
        <Admin>
          <div className="ms-content-wrapper">
            <div className="row">
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="12" sm="6" md="9" lg="9" xl="9">
                        <h1 className="main_color">Add Delivery</h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        style={{ textAlign: "right" }}
                      >
                        <Link to="/delivery">
                          <Button
                            type="button"
                            size="sm"
                            color="primary"
                            className="mb-2 mr-2 custom-button"
                          >
                            Back
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                    <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label for="exampleCustomSelect">
                            Select User:
                          </Label>
                          <Input
                            type="select"
                            name="userid"
                            onChange={this.onItemSelect}
                          >
                            <option value="">Select User:</option>
                            <option id="1" value="User-1">User-1</option>
                            <option id="2" value="User-2">User-2</option>
                            {/* {
                              this.state.userrole.length > 0 ? this.state.userrole.map((data:any, index:any) =>
                                  <option key={data.roleId} value={data.roleId}>{data.role}</option>
                              ) : ''
                          } */}
                          </Input>
                          <div className="mb-4 text-danger">
                          {this.state.userid}
                        </div>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label for="exampleCustomSelect">
                            Select Area:
                          </Label>
                          <Input
                            type="select"
                            name="areaid"
                            onChange={this.onItemSelect}
                          >
                            <option value="">Select Area:</option>
                            <option id="1" value="Area-1">Area-1</option>
                            <option id="2" value="Area-2">Area-2</option>
                            {/* {
                              this.state.userrole.length > 0 ? this.state.userrole.map((data:any, index:any) =>
                                  <option key={data.roleId} value={data.roleId}>{data.role}</option>
                              ) : ''
                          } */}
                          </Input>
                          <div className="mb-4 text-danger">
                          {this.state.areaIDerror}
                        </div>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label for="exampleCustomSelect">
                            Select Shop:
                          </Label>
                          <Input
                            type="select"
                            name="shopid"
                            onChange={this.onItemSelect}
                          >
                            <option value="">Select Shop:</option>
                            <option id="1" value="Shop-1">Shop-1</option>
                            <option id="2" value="Shop-2">Shop-2</option>
                            {/* {
                              this.state.userrole.length > 0 ? this.state.userrole.map((data:any, index:any) =>
                                  <option key={data.roleId} value={data.roleId}>{data.role}</option>
                              ) : ''
                          } */}
                          </Input>
                          <div className="mb-4 text-danger">
                          {this.state.shopIDerror}
                        </div>
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="registration">Registration Number</Label>
                          <Input
                            type="text"
                            id="registration"
                            name="registerationNumber"
                            className="form-control"
                            // value={this.state.firstname}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your registeration number"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.registerationNumbererror}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup className="img-upload">
                          {this.state.file != null ? (
                            <div className="img-size">
                              {this.state.file != null ? (
                                <div>
                                  <img
                                    className="picture"
                                    // src={constant.filepath + this.state.file}
                                  />
                                  <i
                                    className="fa fa-times cursor"
                                    onClick={() => this.removeIcon()}
                                  ></i>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <div className="">
                              <p style={{ fontSize: "16px",color: '#aaaaaa'}}>Vehicle Back Image</p>
                              <Label className="imag" for="file-input">
                                <i
                                  className="fa fa-upload fa-lg"
                                  style={{ color: "#20a8d8" }}
                                ></i>
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
                          {/* <div className="text-danger">
                            {this.state.selectedFileerror}
                          </div> */}
                        </FormGroup>
                      </Col>

                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup className="img-upload">
                          {this.state.file != null ? (
                            <div className="img-size">
                              {this.state.file != null ? (
                                <div>
                                  <img
                                    className="picture"
                                    // src={constant.filepath + this.state.file}
                                  />
                                  <i
                                    className="fa fa-times cursor"
                                    onClick={() => this.removeIcon()}
                                  ></i>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <div className="">
                              <p style={{ fontSize: "16px",color: '#aaaaaa'}}>RC Image</p>
                              <Label className="imag" for="file-input">
                                <i
                                  className="fa fa-upload fa-lg"
                                  style={{ color: "#20a8d8" }}
                                ></i>
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
                          {/* <div className="text-danger">
                            {this.state.selectedFileerror}
                          </div> */}
                        </FormGroup>
                      </Col>

                     
                    </Row>
                      <Row>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup className="img-upload">
                          {this.state.file != null ? (
                            <div className="img-size">
                              {this.state.file != null ? (
                                <div>
                                  <img
                                    className="picture"
                                    // src={constant.filepath + this.state.file}
                                  />
                                  <i
                                    className="fa fa-times cursor"
                                    onClick={() => this.removeIcon()}
                                  ></i>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <div className="">
                              <p style={{ fontSize: "16px",color: '#aaaaaa'}}>DL Image</p>
                              <Label className="imag" for="file-input">
                                <i
                                  className="fa fa-upload fa-lg"
                                  style={{ color: "#20a8d8" }}
                                ></i>
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
                          {/* <div className="text-danger">
                            {this.state.selectedFileerror}
                          </div> */}
                        </FormGroup>
                      </Col>

                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup className="img-upload">
                          {this.state.file != null ? (
                            <div className="img-size">
                              {this.state.file != null ? (
                                <div>
                                  <img
                                    className="picture"
                                    // src={constant.filepath + this.state.file}
                                  />
                                  <i
                                    className="fa fa-times cursor"
                                    onClick={() => this.removeIcon()}
                                  ></i>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <div className="">
                              <p style={{ fontSize: "16px",color: '#aaaaaa'}}>Id Proof Image</p>
                              <Label className="imag" for="file-input">
                                <i
                                  className="fa fa-upload fa-lg"
                                  style={{ color: "#20a8d8" }}
                                ></i>
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
                          {/* <div className="text-danger">
                            {this.state.selectedFileerror}
                          </div> */}
                        </FormGroup>
                      </Col>

                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup className="img-upload">
                          {this.state.file != null ? (
                            <div className="img-size">
                              {this.state.file != null ? (
                                <div>
                                  <img
                                    className="picture"
                                    // src={constant.filepath + this.state.file}
                                  />
                                  <i
                                    className="fa fa-times cursor"
                                    onClick={() => this.removeIcon()}
                                  ></i>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <div className="">
                              <p style={{ fontSize: "16px",color: '#aaaaaa'}}>Vehicle Front Image</p>
                              <Label className="imag" for="file-input">
                                <i
                                  className="fa fa-upload fa-lg"
                                  style={{ color: "#20a8d8" }}
                                ></i>
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
                          {/* <div className="text-danger">
                            {this.state.selectedFileerror}
                          </div> */}
                        </FormGroup>
                      </Col>
                    
                    </Row>
                  
                    <Button
                      type="button"
                      size="sm"
                      color="primary"
                      className="mb-2 mr-2 custom-button"
                      // onClick={this.addUser}
                    >
                      Save
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </div>
        </Admin>
      </>
    );
  }
}

export default AddDelivery;
