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
import constant from '../../../constant/constant';
import Admin from '../../../layouts/Admin';

class ViewArea extends React.Component<{ history: any }> {

    async componentDidMount() {
        // document.title = constant.viewCategoryTitle + utils.getAppName();
    
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
                                                <h1 className="main_color">View Area Details</h1>
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
                                                    <Label htmlFor="category_name"><b>Area Name</b></Label>
                                                    <p>Area-1</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup className="img-upload">
                                                <Label htmlFor="category_name"><b>Pin Code</b></Label>
                                                <p>360001</p>
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

export default ViewArea;
