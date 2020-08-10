import React from "react";
import { Link } from "react-router-dom";
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
import constant from "../../../constant/constant";
import Admin from "../../../layouts/Admin";
import utils from "../../../helper/utils/utils";
import { DeliveryBoyAPI } from "../../../service/index.service";

class ViewDelivery extends React.Component<{ history: any, location: any }> {

  state = {
    username: '',
    mobile: '',
    email: '',
    image: ''
  }

  constructor(props: any) {
    super(props);
    this.getDeliveryBoyById = this.getDeliveryBoyById.bind(this);
  }

  async componentDidMount() {
    document.title = constant.viewDelivery + utils.getAppName();
    const deliveryBoyId = this.props.location.pathname.split("/")[2];
    if (deliveryBoyId !== undefined) {
      this.getDeliveryBoyById(deliveryBoyId);
    }
  }

  async getDeliveryBoyById(id: any) {
    const obj = {
      id: id
    };
    const getDeliveryBoyById: any = await DeliveryBoyAPI.getDeliveryBoyById(obj);
    console.log("getDeliveryBoyById", getDeliveryBoyById);
    try {
      if (getDeliveryBoyById) {
        if (getDeliveryBoyById.statusCode === 200) {
          this.setState({
            username: this.state.username = getDeliveryBoyById.data.name,
            email: this.state.email = getDeliveryBoyById.data.email,
            mobile: this.state.mobile = getDeliveryBoyById.data.mobile,
            image: this.state.image = getDeliveryBoyById.data.profilePicture
          });
        } else {
          const msg1 = getDeliveryBoyById.messageCode;
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
                        <h1 className="main_color">{constant.deliveryBoyPage.viewdeliverydetails.detail}</h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        className="search_right"
                      >
                        <Link to="/delivery">
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
                            <b>{constant.deliveryBoyPage.deliveryBoyTableColumn.username}</b>
                          </Label>
                          <p>{this.state.username}</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="email">
                            <b>{constant.deliveryBoyPage.deliveryBoyTableColumn.email}</b>
                          </Label>
                          <p>{this.state.email}</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="first_name">
                            <b>{constant.deliveryBoyPage.deliveryBoyTableColumn.mobilenumber}</b>
                          </Label>
                          <p>{this.state.mobile}</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="email">
                            <b>{constant.deliveryBoyPage.deliveryBoyTableColumn.userimage}</b>
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

export default ViewDelivery;
