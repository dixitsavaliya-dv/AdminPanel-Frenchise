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
import "./addproduct.css";

import constant from "../../../constant/constant";
// import {
//   userCreateRequest,
//   userUpdateRequest,
// } from "../../../modelController/userModel";
import { any } from "prop-types";
import Admin from "../../../layouts/Admin";
import utils from "../../../helper/utils/utils";

class AddProduct extends React.Component<{ history: any }> {
  state = {
    name: "",
    nameerror: "",
    description: "",
    descriptionerror: "",
    price: "",
    priceerror: "",
    shopid: 0,
    shopiderror: "",
    categoryid: "",
    categoryiderror: "",
    checked: false,
    subcategoryid: "",
    subcategoryiderror: ""
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
    document.title = constant.addProduct + utils.getAppName();
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

  validate() {
    let nameerror = "";
    let descriptionerror = "";
    let priceerror = "";
    let shopiderror = "";
    let categoryiderror = "";
    let subcategoryiderror = "";

    if (!this.state.name) {
      nameerror = "please enter product name";
    }

    if (!this.state.description) {
        descriptionerror = "please enter description";
    }

    if (!this.state.price) {
        priceerror = "please enter price";
    }

    if (!this.state.shopid) {
        shopiderror = "please select shop";
    }

    if (!this.state.categoryid) {
        categoryiderror = "please select category";
    }

    if (!this.state.subcategoryid) {
        subcategoryiderror = "please select sub category";
    }

    if (
      nameerror ||
      descriptionerror ||
      priceerror ||
      shopiderror ||
      categoryiderror ||
      subcategoryiderror
    ) {
      this.setState({
        nameerror,
        descriptionerror,
        priceerror,
        shopiderror,
        categoryiderror,
        subcategoryiderror
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
                        <h1 className="main_color">Add Product</h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        style={{ textAlign: "right" }}
                      >
                        <Link to="/product">
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
                          <Label htmlFor="name">Name</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            // value={this.state.firstname}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your name"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.nameerror}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                      <FormGroup>
                          <Label htmlFor="description">Description</Label>
                          <Input
                            type="textarea"
                            id="description"
                            name="description"
                            className="form-control"
                            // value={this.state.email}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your description"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.descriptionerror}
                          </div>
                        </FormGroup>
                       </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="price">Price</Label>
                          <Input
                            type="number"
                            id="price"
                            name="price"
                            className="form-control"
                            // value={this.state.mobilenumber}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your price"
                          />
                          <div className="mb-4 text-danger">
                            {this.state.priceerror}
                          </div>
                        </FormGroup>
                        
                      </Col>
                      </Row>
                      <Row>
               
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
                          {this.state.shopiderror}
                        </div>
                        </FormGroup>
                      </Col>
                
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label for="exampleCustomSelect">
                            Select Category:
                          </Label>
                          <Input
                            type="select"
                            name="categoryid"
                            onChange={this.onMainItemSelect}
                          >
                         
                            <option value="">Select Category:</option>
                            <option id="1" value="Food">Food</option>
                            <option id="2" value="Snacks">Snacks</option>
                            {/* {
                              this.state.userrole.length > 0 ? this.state.userrole.map((data:any, index:any) =>
                                  <option key={data.roleId} value={data.roleId}>{data.role}</option>
                              ) : ''
                          } */}
                          </Input>
                          <div className="mb-4 text-danger">
                          {this.state.categoryiderror}
                        </div>
                        </FormGroup>
                      </Col>

                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label for="exampleCustomSelect">
                            Select SubCategory:
                          </Label>
                          <Input
                            type="select"
                            name="subcategoryid"
                            onChange={this.onSubItemSelect}
                          >
                            {/* <option value="">Select UserRole:</option> */}
                            <option value="">Select SubCategory:</option>
                            <option id="1" value="Fruits">Fruits</option>
                            <option id="2" value="Pizza">Pizza</option>
                            {/* {
                              this.state.userrole.length > 0 ? this.state.userrole.map((data:any, index:any) =>
                                  <option key={data.roleId} value={data.roleId}>{data.role}</option>
                              ) : ''
                          } */}
                          </Input>
                          <div className="mb-4 text-danger">
                          {this.state.subcategoryiderror}
                        </div>
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

export default AddProduct;
