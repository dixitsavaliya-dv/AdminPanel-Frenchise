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
import constant from '../../../constant/constant';
import Admin from '../../../layouts/Admin';
import utils from '../../../helper/utils/utils';
import { FrenchiseAPI } from '../../../service/index.service';

class ViewFrenchise extends React.Component<{ history: any, location: any }> {

    state = {
        address: '',
        status: '',
        servicearea:''
    }

    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        document.title = constant.viewFrenchise + utils.getAppName();
        const FrenchiseId = this.props.location.pathname.split("/")[2];
        if (FrenchiseId !== undefined) {
            this.getFrenchiseById(FrenchiseId);
        }
    }

    async getFrenchiseById(id: any) {
        const obj = {
            id: id
        };
        const getFrenchiseById: any = await FrenchiseAPI.getFrenchiseById(obj);
        console.log("getFrenchiseById", getFrenchiseById);
        try {
            if (getFrenchiseById) {
                if (getFrenchiseById.statusCode === 200) {
                    this.setState({
                        address: this.state.address = getFrenchiseById.data.address,
                        status: this.state.status = getFrenchiseById.data.verificationRequestStatus,
                        servicearea: this.state.servicearea =  getFrenchiseById.data.serviceArea.name
                    });
                } else {
                    const msg1 = getFrenchiseById.messageCode;
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
                                                <h1 className="main_color">
                                                    {constant.frenchisePage.viewFrenchisedetails.detail}
                                                </h1>
                                            </Col>
                                            <Col xs="12" sm="6" md="3" lg="3" xl="3" className="search_right">
                                                <Link to="/frenchise">
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
                                                    <Label htmlFor="email"><b>{constant.frenchisePage.frenchiseTableColumn.address}</b></Label>
                                                    <p>{this.state.address}</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup>
                                                    <Label htmlFor="mobile_no"><b>{constant.frenchisePage.frenchiseTableColumn.verificationstatus}</b></Label>
                                                    <p>{this.state.status}</p>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup>
                                                    <Label htmlFor="email"><b>{constant.frenchisePage.frenchiseTableColumn.servicearea}</b></Label>
                                                    <p>{this.state.servicearea}</p>
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

export default ViewFrenchise;
