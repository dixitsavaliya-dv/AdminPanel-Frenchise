import React from "react";
import { Link } from "react-router-dom";
// import utils from '../../../utils';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Input,
  Form,
  CustomInput,
  Col,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
// import './adduser.css';
// import NavBar from '../../navbar/navbar';
// import API from '../../../service/service';
// import Switch from "react-switch";
import constant from "../../../constant/constant";
import Admin from "../../../layouts/Admin";
import utils from "../../../helper/utils/utils";
// import { categoryCreateRequest,categoryUpdateRequest } from '../../../modelController/categoryModel';

class AddShop extends React.Component<{ history: any }> {
  state = {
    shopname: "",
    shopnameerror: "",
    userselect: "",
    userselecterror: "",
  };

  constructor(props: any) {
    super(props);
    // this.Profile = this.Profile.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    // this.addCategory = this.addCategory.bind(this);
  }

  async componentDidMount() {
    document.title = constant.addShop + utils.getAppName();
    // const getProfile = await API.getProfile();
    // console.log("getprofile",getProfile);
  }

  onItemSelect() {
    this.setState({});
  }

  validate() {
    let shopnameerror = "";
    let userselecterror = "";

    if (!this.state.shopname) {
        shopnameerror = "please enter category name";
    }

    if (!this.state.userselect) {
      userselecterror = "please select user";
    }

    if (shopnameerror || userselecterror) {
      this.setState({ shopnameerror, userselecterror });
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

  // async addCategory() {
  //     const isValid = this.validate();
  //     if (isValid) {
  //         this.setState({
  //             shopnameerror: '',
  //             userselecterror: ''
  //         })
  //         if (this.state.categoryname && this.state.selectedFile) {
  //             const obj : categoryCreateRequest = {
  //                 categoryname: this.state.categoryname,
  //                 selectedFile: this.state.selectedFile
  //             }

  //             const obj1 : categoryUpdateRequest = {
  //                 id:'',
  //                 categoryname: this.state.categoryname,
  //                 selectedFile: this.state.selectedFile
  //             }

  //             // const addCategory = await API.addCategory(obj);
  //             // console.log("addCategory",addCategory);

  //             // const editCategory = await API.editCategory(obj);
  //             // console.log("editCategory",editCategory);

  //             if (this.state.categoryname === obj.categoryname && this.state.selectedFile === obj.selectedFile) {
  //                 const msg = "Category Added Successfully";
  //                 utils.showSuccess(msg);
  //                 this.props.history.push('/category');
  //             } else {
  //                 const msg1 = "Error";
  //                 utils.showError(msg1);
  //             }
  //         }
  //     };
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
                        <h1 className="main_color">Add Shop</h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        style={{ textAlign: "right" }}
                      >
                        <Link to="/shop">
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
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <Form>
                          <FormGroup>
                            <Label for="exampleCustomSelect">Select User</Label>
                            <CustomInput
                              type="select"
                              id="exampleCustomSelect"
                              name="userselect"
                              onChange={this.onItemSelect}
                            >
                              <option value="">Select User</option>
                              <option value="User-1">User-1</option>
                              <option value="User-2">User-2</option>
                              {/* {
                                                                        this.state.userrole.length > 0 ? this.state.userrole.map((data, index) =>
                                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                                        ) : ''
                                                                    } */}
                            </CustomInput>
                            <div className="mb-4 text-danger">
                              {this.state.userselecterror}
                            </div>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="shopname">Shop Name</Label>
                          <Input
                            type="text"
                            id="shopname"
                            name="shopname"
                            className="form-control"
                            // value={this.state.categoryname}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your shop name"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.shopnameerror}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                   

                    <Button
                      type="button"
                      size="sm"
                      color="primary"
                      className="mb-2 mr-2 custom-button"
                      // onClick={this.addCategory}
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

export default AddShop;
