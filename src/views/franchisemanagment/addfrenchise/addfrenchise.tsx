import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    CustomInput,
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
import utils from '../../../helper/utils/utils';
import constant from '../../../constant/constant';
import Admin from '../../../layouts/Admin';
import API from '../../../service/user.service';
import { FrenchiseAPI } from '../../../service/index.service';

class ChangePassword extends Component {
    frenchiseState = constant.frenchisePage.state
    state = {
        selectuser: this.frenchiseState.selectuser,
        selectusererror: this.frenchiseState.selectusererror,
        address: this.frenchiseState.address,
        addresserror: this.frenchiseState.addresserror,
        servicearea: this.frenchiseState.servicearea,
        serviceareaerror: this.frenchiseState.serviceareaerror,
        updateTrue: this.frenchiseState.updateTrue,
        area: this.frenchiseState.area
    }

    constructor(props: any) {
        super(props);
        this.onAreaSelect = this.onAreaSelect.bind(this);
        this.onItemSelect = this.onItemSelect.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.updateFrenchise = this.updateFrenchise.bind(this);
        this.addFrenchise = this.addFrenchise.bind(this);
        this.getServiceArea = this.getServiceArea.bind(this);
    }

    async componentDidMount() {
        document.title = constant.frenchisePage.title.addfrenchise + utils.getAppName();
        this.getServiceArea();

    }

    async getServiceArea() {
        const getServiceArea = await FrenchiseAPI.getServiceArea();
        console.log("getServiceArea", getServiceArea);

        try {
            if (getServiceArea) {
                if (getServiceArea.statusCode === 200) {
                    this.setState({
                        area: this.state.area = getServiceArea.data
                    })
                } else {
                    const msg1 = getServiceArea.messageCode;
                    utils.showError(msg1);
                }
            } else {
                const msg1 = "Server error";
                utils.showError(msg1);
            }
        } catch (err) {
            console.log("err", err);
        }

    }

    handleChangeEvent(event: any) {
        event.preventDefault();
        const state: any = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    validate() {
        let selectusererror = "";
        let addresserror = "";
        let serviceareaerror = "";

        if (!this.state.selectuser) {
            selectusererror = "please select user"
        }

        if (!this.state.address) {
            addresserror = "please enter address"
        }

        if (!this.state.servicearea) {
            serviceareaerror = "please select service area"
        }

        if (selectusererror || addresserror || serviceareaerror) {
            this.setState({ selectusererror, addresserror, serviceareaerror });
            return false;
        }
        return true;

    }

    onItemSelect(event: any) {
        this.setState({
            selectuser: this.state.selectuser =
                event.target.options[event.target.selectedIndex].value,
        });
    }

    onAreaSelect(event: any) {
        this.setState({
            servicearea: this.state.servicearea =
                event.target.options[event.target.selectedIndex].value,
        });
    }


    async addFrenchise() {
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                selectusererror: '',
                addresserror: '',
                serviceareaerror: ''
            })
            if (this.state.selectuser && this.state.servicearea && this.state.address) {
                const obj = {
                    serviceArea: this.state.serviceareaerror,
                    address: this.state.address,
                    _user: this.state.selectuser

                }
                const updatePassword = await API.updatePassword(obj);
                console.log("updatePassword", updatePassword);

                // if (updatePassword.statusCode === 200) {
                //     const msg = updatePassword.messageCode;
                //     utils.showSuccess(msg);
                // } else {
                //     const msg1 = updatePassword.messageCode;
                //     utils.showError(msg1);
                // }

            } else {
                const msg1 = "Error";
                utils.showError(msg1);
            }
        };
    }

    async updateFrenchise() {
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                selectusererror: '',
                addresserror: '',
                serviceareaerror: ''
            })
            if (this.state.selectuser && this.state.servicearea && this.state.address) {
                const obj = {
                    serviceArea: this.state.serviceareaerror,
                    address: this.state.address,
                    _user: this.state.selectuser

                }
                const updatePassword = await API.updatePassword(obj);
                console.log("updatePassword", updatePassword);

                // if (updatePassword.statusCode === 200) {
                //     const msg = updatePassword.messageCode;
                //     utils.showSuccess(msg);
                // } else {
                //     const msg1 = updatePassword.messageCode;
                //     utils.showError(msg1);
                // }

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
                                <Row>
                                    {this.state.updateTrue === true ? (
                                        <Col xs="12" sm="6" md="9" lg="9" xl="9">
                                            <h1 className="main_color">{constant.frenchisePage.title.updatefrenchise}</h1>
                                        </Col>
                                    ) : (
                                            <Col xs="12" sm="6" md="9" lg="9" xl="9">
                                                <h1 className="main_color">{constant.frenchisePage.title.addfrenchise}</h1>
                                            </Col>
                                        )}

                                    <Col
                                        xs="12"
                                        sm="6"
                                        md="3"
                                        lg="3"
                                        xl="3"
                                        className="search_right"
                                    >
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
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleCustomSelect">
                                                    {constant.frenchisePage.frenchiseTableColumn.selectuser}
                                                </Label>
                                                <CustomInput
                                                    type="select"
                                                    id="exampleCustomSelect"
                                                    name="customSelect"
                                                    onChange={this.onItemSelect}
                                                >
                                                    <option value="">
                                                        {constant.frenchisePage.frenchiseTableColumn.selectuser}
                                                    </option>
                                                    {/* {this.state.categorylist.length > 0
                                                    ? this.state.categorylist.map(
                                                        (data: any, index: any) => (
                                                            <option
                                                                key={data.id}
                                                                value={data.value}
                                                            >
                                                                {data.name}
                                                            </option>
                                                        )
                                                    )
                                                    : ""} */}
                                                </CustomInput>
                                                <div className="mb-4 text-danger">
                                                    {this.state.selectusererror}
                                                </div>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                        <FormGroup>
                                            <Label htmlFor="category_name">{constant.frenchisePage.frenchiseTableColumn.address}</Label>
                                            <Input
                                                type="text"
                                                id="address"
                                                name="address"
                                                className="form-control"
                                                value={this.state.address}
                                                onChange={this.handleChangeEvent}
                                                placeholder="Enter your address"
                                                required
                                            />
                                            <div className="mb-4 text-danger">
                                                {this.state.addresserror}
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleCustomSelect">
                                                    {constant.frenchisePage.frenchiseTableColumn.selectarea}
                                                </Label>
                                                <CustomInput
                                                    type="select"
                                                    id="areaselect"
                                                    name="areaselect"
                                                    onChange={this.onAreaSelect}
                                                >
                                                    <option value="">
                                                        {constant.frenchisePage.frenchiseTableColumn.selectarea}
                                                    </option>
                                                    {this.state.area.length > 0
                                                        ? this.state.area.map(
                                                            (data: any, index: number) => (
                                                                <option
                                                                    key={index}
                                                                    value={data._id}
                                                                >
                                                                    {data.name}
                                                                </option>
                                                            )
                                                        )
                                                        : ""}
                                                </CustomInput>
                                                <div className="mb-4 text-danger">
                                                    {this.state.serviceareaerror}
                                                </div>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                                {this.state.updateTrue === true ? (
                                    <Button
                                        type="button"
                                        size="sm"
                                        color="primary"
                                        className="mb-2 mr-2 custom-button"
                                        onClick={this.updateFrenchise}
                                    >
                                        {constant.button.update}
                                    </Button>
                                ) : (
                                        <Button
                                            type="button"
                                            size="sm"
                                            color="primary"
                                            className="mb-2 mr-2 custom-button"
                                            onClick={this.addFrenchise}
                                        >
                                            {constant.button.Save}
                                        </Button>
                                    )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Admin>
        );
    }
}

export default ChangePassword;