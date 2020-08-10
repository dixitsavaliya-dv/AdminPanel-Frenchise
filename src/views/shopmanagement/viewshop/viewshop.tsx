import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Label,
    Row,
} from 'reactstrap';
import constant from '../../../constant/constant';
import Admin from '../../../layouts/Admin';
import utils from '../../../helper/utils/utils';
import { ShopAPI } from '../../../service/index.service';

class ViewShop extends React.Component<{ history: any, location: any }> {

    state = {
        shopname: '',
        createdAt: ''
    }

    async componentDidMount() {
        document.title = constant.viewShop + utils.getAppName();

        const shopId = this.props.location.pathname.split("/")[2];
        if (shopId !== undefined) {
            this.getShopById(shopId);

        }
    }

    async getShopById(id: any) {
        const obj = {
            id: id
        };
        const getShopById: any = await ShopAPI.getShopById(obj);
        console.log("getShopById", getShopById);
        try {
            if (getShopById) {
                if (getShopById.statusCode === 200) {
                    this.setState({
                        shopname: this.state.shopname = getShopById.data.name,
                        createdAt: this.state.createdAt = getShopById.data.createdAt
                    });
                } else {
                    const msg1 = getShopById.messageCode;
                    utils.showError(msg1);
                }
            } else {
                const msg1 = "Internal server error";
                utils.showError(msg1);
            }
        } catch(err) {
            console.log("err",err);
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
                                                <h1 className="main_color">{constant.shopPage.viewshopdetails.detail}</h1>
                                            </Col>
                                            <Col xs="12" sm="6" md="3" lg="3" xl="3" className="search_right">
                                                <Link to="/shop">
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
                                                    <Label htmlFor="category_name"><b>{constant.shopPage.shopTableColumn.shopname}</b></Label>
                                                    <p>{this.state.shopname}</p>
                                                </FormGroup>
                                            </Col>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup className="img-upload">
                                                    <Label htmlFor="category_name"><b>{constant.shopPage.shopTableColumn.createdAt}</b></Label>
                                                    <p>{this.state.createdAt}</p>
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

export default ViewShop;
