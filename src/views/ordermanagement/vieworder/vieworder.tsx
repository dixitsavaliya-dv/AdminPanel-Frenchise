import React from 'react';
import { Link } from 'react-router-dom';
// import utils from '../../../utils';
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
// import './adduser.css';
// import NavBar from '../../navbar/navbar';
// import API from '../../../service/service';
// import Switch from "react-switch";
import constant from '../../../constant/constant';
import Admin from '../../../layouts/Admin';
import utils from '../../../helper/utils/utils';

class ViewOrder extends React.Component<{ history: any }> {

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        document.title = constant.viewOrder + utils.getAppName();
        // const getProfile = await API.getProfile();
        // console.log("getprofile",getProfile);
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
                                                <h1 className="main_color">View Order Details</h1>
                                            </Col>
                                            <Col xs="12" sm="6" md="3" lg="3" xl="3" style={{ textAlign: "right" }}>
                                                <Link to="/order">
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
                                                    <Label htmlFor="first_name"><b>Customer Name</b></Label>
                                                    <p>Customer-1</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="email"><b>Order Number</b></Label>
                                                    <p>121256568989</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="mobile_no"><b>Product Name</b></Label>
                                                    <p>Product-1</p>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="first_name"><b>Payment Method</b></Label>
                                                    <p>Net Banking</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="email"><b>Amount</b></Label>
                                                    <p>40000</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="mobile_no"><b>Delivery Boy Name</b></Label>
                                                    <p>Delivery Boy-1</p>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="first_name"><b>Transaction Id</b></Label>
                                                    <p>2</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="email"><b>Status</b></Label>
                                                    <p>Order Placed</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <FormGroup>
                                                    <Label htmlFor="mobile_no"><b>Available</b></Label>
                                                    <p>True</p>
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

export default ViewOrder;
