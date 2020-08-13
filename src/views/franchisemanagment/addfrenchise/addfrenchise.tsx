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

class AddFrenchise extends React.Component<{ history: any, location: any }> {
    frenchiseState = constant.frenchisePage.state
    state = {
        selectuser: this.frenchiseState.selectuser,
        selectusererror: this.frenchiseState.selectusererror,
        address: this.frenchiseState.address,
        addresserror: this.frenchiseState.addresserror,
        servicearea: this.frenchiseState.servicearea,
        serviceareaerror: this.frenchiseState.serviceareaerror,
        updateTrue: this.frenchiseState.updateTrue,
        area: this.frenchiseState.area,
        userid: this.frenchiseState.userid,
        frenchiseid: this.frenchiseState.frenchiseid,
        serviceareaname:this.frenchiseState.serviceareaname
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
        const users: any = localStorage.getItem('user');
        let user = JSON.parse(users);
        if (user) {
            this.setState({
                userid: this.state.userid = user.userId
            })
        }
        this.getServiceArea();
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
                        serviceareaname: this.state.serviceareaname = getFrenchiseById.data.serviceArea.name,
                        frenchiseid: this.state.frenchiseid = getFrenchiseById.data._id,
                        servicearea: this.state.servicearea = getFrenchiseById.data.serviceArea._id
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
        let addresserror = "";
        let serviceareaerror = "";

        if (!this.state.address) {
            addresserror = "please enter address"
        }

        if (!this.state.servicearea) {
            serviceareaerror = "please select service area"
        }

        if (addresserror || serviceareaerror) {
            this.setState({ addresserror, serviceareaerror });
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
                event.target.value
        });
    }


    async addFrenchise() {
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                addresserror: '',
                serviceareaerror: ''
            })
            if (this.state.userid && this.state.servicearea && this.state.address) {
                const obj = {
                    serviceArea: this.state.servicearea,
                    address: this.state.address,
                    _user: this.state.userid
                }

                console.log("obj", obj);

                const AddFrenchise = await FrenchiseAPI.AddFrenchise(obj);
                console.log("AddFrenchise", AddFrenchise);

                if (AddFrenchise.statusCode === 200) {
                    const msg = AddFrenchise.messageCode;
                    utils.showSuccess(msg);
                } else {
                    const msg1 = AddFrenchise.messageCode;
                    utils.showError(msg1);
                }

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
                addresserror: '',
                serviceareaerror: ''
            })
            if (this.state.servicearea && this.state.address) {
                const obj = {
                    serviceArea: this.state.servicearea,
                    address: this.state.address,
                    _user: this.state.userid
                }

                console.log("obj", obj);
                const updateFrenchise = await FrenchiseAPI.updateFrenchise(obj, this.state.frenchiseid);
                console.log("updateFrenchise", updateFrenchise);

                if (updateFrenchise.statusCode === 200) {
                    const msg = updateFrenchise.messageCode;
                    utils.showSuccess(msg);
                } else {
                    const msg1 = updateFrenchise.messageCode;
                    utils.showError(msg1);
                }

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
                                                    {
                                                        this.state.updateTrue === true ? (
                                                            <>
                                                                <option value={this.state.servicearea}>
                                                                    {this.state.serviceareaname}
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
                                                            </>
                                                        ) : (
                                                                <>
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
                                                                </>
                                                            )
                                                    }

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

export default AddFrenchise;