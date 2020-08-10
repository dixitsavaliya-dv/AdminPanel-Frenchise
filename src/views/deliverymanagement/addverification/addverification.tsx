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

class AddDeliveryVerification extends React.Component<{ history: any }> {
  state = {
    userselect: "",
    userselecterror: "",
    statusselect: "",
    statusselecterror: "",
  };

  constructor(props: any) {
    super(props);
    // this.Profile = this.Profile.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    // this.addCategory = this.addCategory.bind(this);
  }

  async componentDidMount() {
    document.title = constant.addVerification + utils.getAppName();
    // const getProfile = await API.getProfile();
    // console.log("getprofile",getProfile);
  }

  onItemSelect() {
    this.setState({});
  }

  validate() {
    let userselecterror = "";
    let statusselecterror = "";

    if (!this.state.userselect) {
      userselecterror = "please select user";
    }

    if (!this.state.statusselect) {
      statusselecterror = "please select status";
    }

    if (userselecterror || statusselecterror) {
      this.setState({ userselecterror, statusselecterror });
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
  //             userselecterror: '',
  //             statusselecterror: ''
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
                        <h1 className="main_color">
                          Add Delivery Verification
                        </h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        style={{ textAlign: "right" }}
                      >
                        <Link to="/delivery-verification">
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
                            <Label for="shop">Select User</Label>
                            <CustomInput
                              type="select"
                              id="shop"
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
                        <Form>
                          <FormGroup>
                            <Label for="status">Select Status</Label>
                            <CustomInput
                              type="select"
                              id="status"
                              name="selectstatus"
                              onChange={this.onItemSelect}
                            >
                              <option value="">Select Status</option>
                              <option value="pending">Pending</option>
                              <option value="accepted">Accepted</option>
                              <option value="rejected">Rejected</option>
                              {/* {
                                                                        this.state.userrole.length > 0 ? this.state.userrole.map((data, index) =>
                                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                                        ) : ''
                                                                    } */}
                            </CustomInput>
                            <div className="mb-4 text-danger">
                              {this.state.statusselecterror}
                            </div>
                          </FormGroup>
                        </Form>
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

export default AddDeliveryVerification;
