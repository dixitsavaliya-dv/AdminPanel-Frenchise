import React from 'react';
import { Link } from 'react-router-dom';
// import utils from '../../../utils';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Input,
    Col,
    FormGroup,
    Label,
    Row,
} from 'reactstrap';
// import './adduser.css';
// import NavBar from '../../navbar/navbar';
// import API from '../../../service/service';
// import Switch from "react-switch";
import constant from '../../constant/constant';
import Admin from '../../layouts/Admin';
// import { categoryCreateRequest,categoryUpdateRequest } from '../../../modelController/categoryModel';

class AreaManagement extends React.Component<{ history: any }> {

    state = {
        name: '',
        nameerror: '',
        pincode:'',
        pincodeerror:''
    }

    constructor(props: any) {
        super(props);
        // this.Profile = this.Profile.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        // this.addCategory = this.addCategory.bind(this);
    }

    async componentDidMount() {
        // document.title = constant.addCategoryTitle + utils.getAppName();
        
          // const getProfile = await API.getProfile();
        // console.log("getprofile",getProfile);
    }



    validate() {
        let nameerror = "";
        let pincodeerror = "";

        if (!this.state.name) {
            nameerror = "please enter area name";
        }

        if (!this.state.pincode) {
            pincodeerror = "please enter area pincode";
        }

        if (nameerror || pincodeerror) {
            this.setState({ nameerror, pincodeerror });
            return false;
        }
        return true;
    };

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
    //             nameerror: '',
    //             pincodeerror: ''
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
                                                <h1 className="main_color">Area Management</h1>
                                            </Col>
                                            <Col xs="12" sm="6" md="3" lg="3" xl="3" style={{ textAlign: "right" }}>
                                                <Link to="/list-area">
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
                                                <FormGroup>
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="form-control"
                                                        // value={this.state.categoryname}
                                                        onChange={this.handleChangeEvent}

                                                        placeholder="Enter your area name"
                                                        required
                                                    />
                                                    <div className="mb-4 text-danger">
                                                        {this.state.nameerror}
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup>
                                                    <Label htmlFor="number">PinCode</Label>
                                                    <Input
                                                        type="number"
                                                        id="number"
                                                        name="pincode"
                                                        className="form-control"
                                                        // value={this.state.categoryname}
                                                        onChange={this.handleChangeEvent}

                                                        placeholder="Enter your area pincode"
                                                        required
                                                    />
                                                    <div className="mb-4 text-danger">
                                                        {this.state.pincodeerror}
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

export default AreaManagement;
