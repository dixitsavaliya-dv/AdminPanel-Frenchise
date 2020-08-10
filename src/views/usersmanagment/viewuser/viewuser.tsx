import React from 'react';
import { Link } from 'react-router-dom';
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
} from 'reactstrap';
import constant from '../../../constant/constant';
import Admin from '../../../layouts/Admin';
import utils from '../../../helper/utils/utils';
import { CustomerAPI } from '../../../service/index.service';

class ViewUser extends React.Component<{ history: any, location: any }> {

    state = {
        username: '',
        mobile: '',
        email: '',
        image: ''
    }

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        document.title = constant.viewUser + utils.getAppName();
        const customerId = this.props.location.pathname.split("/")[2];
        if (customerId !== undefined) {
            this.getCustomerById(customerId);
        }
    }

    async getCustomerById(id: any) {
        const obj = {
            id: id
        };
        const getCustomerById: any = await CustomerAPI.getCustomerById(obj);
        console.log("getCustomerById", getCustomerById);
        try {
            if (getCustomerById) {
                if (getCustomerById.statusCode === 200) {
                    this.setState({
                        username: this.state.username = getCustomerById.data.name,
                        email: this.state.email = getCustomerById.data.email,
                        mobile: this.state.mobile = getCustomerById.data.mobile,
                        image: this.state.image = getCustomerById.data.profilePicture
                    });
                } else {
                    const msg1 = getCustomerById.messageCode;
                    utils.showError(msg1);
                }
            } else {
                const msg1 = "Internal server error";
                utils.showError(msg1);
            }
        } catch (err) {
            console.log("err", err);
        }
    }


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
                                                <h1 className="main_color">{constant.userPage.viewuserdetails.detail}</h1>
                                            </Col>
                                            <Col xs="12" sm="6" md="3" lg="3" xl="3" className="search_right">
                                                <Link to="/users">
                                                    <Button
                                                        type="button"
                                                        size="sm"
                                                        color="primary"
                                                        className="mb-2 mr-2 custom-button"
                                                    >
                                                        {constant.button.back}
                                                    </Button>
                                                </Link>
                                            </Col>
                                        </Row>

                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup>
                                                    <Label htmlFor="first_name">
                                                        <b>{constant.userPage.userTableColumn.username}</b>
                                                    </Label>
                                                    <p>{this.state.username}</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup>
                                                    <Label htmlFor="email">
                                                        <b>{constant.userPage.userTableColumn.email}</b>
                                                    </Label>
                                                    <p>{this.state.email}</p>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup>
                                                    <Label htmlFor="first_name">
                                                        <b>{constant.userPage.userTableColumn.mobilenumber}</b>
                                                    </Label>
                                                    <p>{this.state.mobile}</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup>
                                                    <Label htmlFor="email">
                                                        <b>{constant.userPage.userTableColumn.userimage}</b>
                                                    </Label>
                                                    {this.state.image != '' ? (
                                                        <div className="img-size">
                                                            {this.state.image ? (
                                                                <div>
                                                                    <img
                                                                        className="picture"
                                                                        src={this.state.image}
                                                                    />
                                                                </div>
                                                            ) : null}
                                                        </div>
                                                    ) : (
                                                            <div>
                                                                <i className="fa fa-user picture"></i>
                                                            </div>
                                                        )}
                                                </FormGroup>
                                            </Col>
                                        </Row>
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

export default ViewUser;
