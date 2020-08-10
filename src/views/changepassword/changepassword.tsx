import React, { Component } from 'react';
import Swal from 'sweetalert2';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import utils from '../../helper/utils/utils';
import constant from '../../constant/constant';
import Admin from '../../layouts/Admin';
import API from '../../service/user.service';

class ChangePassword extends Component {

    state = {
        oldpassword: '',
        oldpassworderror:'',
        newpassword: '',
        newpassworderror:'',
        confirmpassword:'',
        confirmpassworderror:'',
        userid:0
    }

    constructor(props:any) {
        super(props);
        this.ChangePassword = this.ChangePassword.bind(this);
    }

    async componentDidMount() {
        let userid:any = localStorage.getItem('user');
        this.state.userid = JSON.parse(userid).userId
        document.title = constant.changePassword + utils.getAppName();
      }
    

      validate() {
        let oldpassworderror = "";
        let newpassworderror = "";
        let confirmpassworderror = "";

        if(!this.state.oldpassword) {
            oldpassworderror = "please enter old password"
        }

        if(!this.state.newpassword) {
            newpassworderror = "please enter new password"
        }

        if(!this.state.confirmpassword) {
            confirmpassworderror = "please enter confirm password"
        }

        if (newpassworderror || oldpassworderror || confirmpassworderror) {
            this.setState({ newpassworderror, oldpassworderror, confirmpassworderror});
            return false;
        }
        return true;

    }


    async ChangePassword() {
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                newpassworderror:'',
                oldpassworderror:'',
                confirmpassworderror:''
            })
            if(this.state.newpassword === this.state.confirmpassword && this.state.oldpassword !== this.state.newpassword) {
                const obj  = {
                    id: this.state.userid,
                    password: this.state.oldpassword,
                    newPassword:this.state.newpassword

                }
               const updatePassword = await API.updatePassword(obj);
                console.log("updatePassword",updatePassword);
                
                if (updatePassword.statusCode === 200) {
                    const msg = updatePassword.messageCode;
                    utils.showSuccess(msg);
                } else {
                    const msg1 = updatePassword.messageCode;
                    utils.showError(msg1);
                }

            } else if(this.state.newpassword !== this.state.confirmpassword) {
                const msg1 = "new password && confirm password are not same please check again";
                utils.showError(msg1);
            } else if(this.state.oldpassword === this.state.newpassword) {
                const msg1 = "new password && old password are same please change new password";
                utils.showError(msg1);
            } else {
                const msg1 = "Error";
                utils.showError(msg1);
            }
        };
    }



    render() {

        return (
            <Admin>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <Card>
                            <CardHeader>
                                <strong className="maincontent">Change Password</strong>
                             
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                        <FormGroup>
                                            <Label htmlFor="oldpassword">OldPassword</Label>
                                            <Input
                                                type="password"
                                                id="oldpassword"
                                                name="oldpassword"
                                                className="form-control"
                                                onChange={(e) =>
                                                    this.state.oldpassword = e.target.value
                                                }
                                                placeholder="Enter your Old Password"
                                                required
                                            />
                                                 <div className="text-danger">
                                                        {this.state.oldpassworderror}
                                                    </div>

                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                        <FormGroup>
                                            <Label htmlFor="newpassword">NewPassword</Label>
                                            <Input
                                                type="password"
                                                id="newpassword"
                                                name="newpassword"
                                                className="form-control"
                                                onChange={(e) =>
                                                    this.state.newpassword = e.target.value
                                                }
                                                placeholder="Enter your New Password"
                                                required
                                            />
                                                 <div className="text-danger">
                                                        {this.state.newpassworderror}
                                                    </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                        <FormGroup>
                                            <Label htmlFor="confirmpassword">ConfirmPassword</Label>
                                            <Input
                                                type="password"
                                                id="confirmpassword"
                                                name="confirmpassword"
                                                className="form-control"
                                                onChange={(e) =>
                                                    this.state.confirmpassword = e.target.value
                                                }
                                                placeholder="Enter your Confirm Password"
                                                required
                                            />
                                                 <div className="text-danger">
                                                        {this.state.confirmpassworderror}
                                                    </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                             
                                <Button type="button" size="sm" color="primary" onClick={this.ChangePassword}>Update</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Admin>
        );
    }
}

export default ChangePassword;