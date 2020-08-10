import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  CardTitle,
  Form,
  CustomInput,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import "./delivery.css";
import Admin from "../../../layouts/Admin";
import utils from "../../../helper/utils/utils";
import constant from "../../../constant/constant";
import { DeliveryBoyAPI } from "../../../service/index.service";

class DeliveryList extends React.Component<{ history: any }> {
  deliveryBoyState = constant.deliveryBoyPage.state;
  state = {
    count: this.deliveryBoyState.count,
    currentPage: this.deliveryBoyState.currentPage,
    items_per_page: this.deliveryBoyState.items_per_page,
    upperPageBound: this.deliveryBoyState.upperPageBound,
    lowerPageBound: this.deliveryBoyState.lowerPageBound,
    pageBound: this.deliveryBoyState.pageBound,
    onItemSelect: this.deliveryBoyState.onItemSelect,
    deliveryboydata: this.deliveryBoyState.deliveryboydata,
    switchSort: this.deliveryBoyState.switchSort,
    isStatus: this.deliveryBoyState.isStatus,
  };

  constructor(props: any) {
    super(props);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.getDeliveryBoyData = this.getDeliveryBoyData.bind(this);
    this.viewDeliveryBoy = this.viewDeliveryBoy.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchApplicationDataKeyUp = this.searchApplicationDataKeyUp.bind(
      this
    );
    this.handleSort = this.handleSort.bind(this);
    this.compareByDesc = this.compareByDesc.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    // this.statusChange = this.statusChange.bind(this);
    this.pagination = this.pagination.bind(this);
    this.getTable = this.getTable.bind(this);
    this.getPageData = this.getPageData.bind(this);

  }

  async componentDidMount() {
    document.title = constant.delivery + utils.getAppName();
    utils.dataTable();
    this.getDeliveryBoyData();
  }

  async getDeliveryBoyData(
    page: number = 1,
    rowsPerPage: number = 10
  ) {
    const obj = {
      where: {
        isVerified: "true"
      },
      pagination: {
        sortBy: "createdAt",
        descending: true,
        rowsPerPage: rowsPerPage,
        page: page
      }
    }

    var getDeliveryBoyData = await DeliveryBoyAPI.getDeliveryBoyData(obj);
    console.log("getDeliveryBoyData", getDeliveryBoyData);
    try {
      if (getDeliveryBoyData) {
        if (getDeliveryBoyData.statusCode === 200) {
          this.setState({
            deliveryboydata: this.state.deliveryboydata = getDeliveryBoyData.data.list,
            count: this.state.count = getDeliveryBoyData.data.count,
          });
        } else {
          const msg1 = getDeliveryBoyData.message;
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


  btnIncrementClick() {
    this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid });
  }

  btnDecrementClick() {
    this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
    this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid });
  }


  viewDeliveryBoy(id: any) {
    this.props.history.push('/view-delivery-boy/' + id);
  }

  onItemSelect(event: any) {
    this.setState({
      items_per_page: this.state.items_per_page =
        event.target.options[event.target.selectedIndex].value,
    });

    this.getDeliveryBoyData(parseInt(this.state.currentPage), parseInt(this.state.items_per_page));
  }


  async handleClick(event: any) {
    this.setState({
      currentPage: this.state.currentPage = event.target.id,
    });
    const obj = {
      where: {
        isVerified: "true"
      },
      pagination: {
        sortBy: "createdAt",
        descending: true,
        rowsPerPage: parseInt(this.state.items_per_page),
        page: parseInt(event.target.id)
      }
    }
    this.getDeliveryBoyData(obj.pagination.rowsPerPage, obj.pagination.page);
  }

  async searchApplicationDataKeyUp(e: any) {
    // const obj = {
    //     where: {
    //         isVerified: "true"
    //     },
    //     pagination: {
    //         sortBy: "createdAt",
    //         descending: true,
    //         rowsPerPage: parseInt(this.state.items_per_page),
    //         page: parseInt(event.target.id)
    //     }
    //     }

    // this.getShopData(obj.pagination.rowsPerPage,obj.pagination.page);
  }


  handleSort(key: any) {
    this.setState({
      switchSort: !this.state.switchSort,
    });
    let copyTableData = [...this.state.deliveryboydata];
    copyTableData.sort(this.compareByDesc(key));
    this.setState({
      deliveryboydata: this.state.deliveryboydata = copyTableData,
    });
  }

  compareByDesc(key: any) {
    if (this.state.switchSort) {
      return function (a: any, b: any) {
        if (a[key] < b[key]) return -1; // check for value if the second value is bigger then first return -1
        if (a[key] > b[key]) return 1; //check for value if the second value is bigger then first return 1
        return 0;
      };
    } else {
      return function (a: any, b: any) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }
  }

  async statusChange(data: any, text: string, btext: string) {
      if (await utils.alertMessage(text, btext)) {
          const obj = {
              id: data._id,
              isActive: data.isActive === true ? false : true
          }
          const editStatus = await DeliveryBoyAPI.editStatus(obj);
          console.log("editStatus", editStatus);
          if (editStatus.statusCode === 200) {
              const msg = editStatus.messageCode;
              utils.showSuccess(msg);
              this.getDeliveryBoyData();
          } else {
              const msg1 = editStatus.messageCode;
              utils.showError(msg1);
          }
      }
  }

  pagination(pageNumbers: any) {
    var res = pageNumbers.map((number: any) => {
      if (number === 1 && parseInt(this.state.currentPage) === 1) {
        return (
          <li
            key={number}
            id={number}
            className={
              parseInt(this.state.currentPage) === number
                ? "active"
                : "page-item"
            }
          >
            <a className="page-link" onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      } else if (
        number < this.state.upperPageBound + 1 &&
        number > this.state.lowerPageBound
      ) {
        return (
          <li
            key={number}
            id={number}
            className={
              parseInt(this.state.currentPage) === number
                ? "active"
                : "page-item"
            }
          >
            <a className="page-link" id={number} onClick={this.handleClick}>
              {number}
            </a>
          </li>
        );
      }
    });
    return res;
  }

  getTable(shopdata: any) {
    return (
      <table
        id="dtBasicExample"
        className="table table-striped table-bordered table_responsive table-sm"
        width="100%"
      >
        <thead>
          <tr onClick={() => this.handleSort("name")}>
            <th>{constant.deliveryBoyPage.deliveryBoyTableColumn.username}</th>
            <th>{constant.deliveryBoyPage.deliveryBoyTableColumn.mobilenumber}</th>
            <th>{constant.deliveryBoyPage.deliveryBoyTableColumn.email}</th>
            <th className="text-center">{constant.tableAction.status}</th>
            <th className="action">{constant.tableAction.action}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.deliveryboydata.length > 0 ? (
            <>
              {this.state.deliveryboydata.map((data: any, index: number) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.email}</td>
                  <td className="text-center">
                    {data.isActive === true ? (
                      <button
                        className="status_active_color"
                      onClick={() =>
                          this.statusChange(
                              data,
                              "You should be inActive delivery boy",
                              "Yes, inActive it"
                          )
                      }
                      >
                        Active
                      </button>
                    ) : (
                        <button
                          className="status_inactive_color"
                        onClick={() =>
                            this.statusChange(
                                data,
                                "You should be Active delivery boy",
                                "Yes, Active it"
                            )
                        }
                        >
                          InActive
                        </button>
                      )}
                  </td>
                  <td className="action">
                    <span className="text-center">
                      <i
                        className="fa fa-eye"
                        onClick={() => this.viewDeliveryBoy(data._id)}
                      ></i>
                    </span>
                  </td>
                </tr>
              ))}
            </>
          ) : (
              ""
            )}
        </tbody>
      </table>

    );
  }

  getPageData(
    pageDecrementBtn: any,
    renderPageNumbers: any,
    pageIncrementBtn: any
  ) {
    return (
      <div className="filter">
        <CustomInput
          type="select"
          id="item"
          className="custom_text_width"
          name="customSelect"
          onChange={this.onItemSelect}
        >
          <option value="10">{constant.recordPerPage.recordperPage}</option>
          <option value={constant.recordPerPage.fifteen}>
            {constant.recordPerPage.fifteen}
          </option>
          <option value={constant.recordPerPage.twenty}>
            {constant.recordPerPage.twenty}
          </option>
          <option value={constant.recordPerPage.thirty}>
            {constant.recordPerPage.thirty}
          </option>
          <option value={constant.recordPerPage.fifty}>
            {constant.recordPerPage.fifty}
          </option>
        </CustomInput>
        <div>
          <ul className="pagination" id="page-numbers">
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
          </ul>
        </div>
      </div>
    );
  }


  render() {
    var pageNumbers = [];
    for (let i = 1; i <= Math.ceil(parseInt(this.state.count) / parseInt(this.state.items_per_page)); i++) {
      pageNumbers.push(i);
    }
    var renderPageNumbers = this.pagination(pageNumbers);

    let pageIncrementBtn = null;
    if (pageNumbers.length > this.state.upperPageBound) {
      pageIncrementBtn = (
        <li className="page-item">
          <a className="page-link" onClick={this.btnIncrementClick}>
            &hellip;
          </a>
        </li>
      );
    }

    let pageDecrementBtn = null;
    if (this.state.lowerPageBound >= 1) {
      pageDecrementBtn = (
        <li className="page-item">
          <a className="page-link" onClick={this.btnDecrementClick}>
            &hellip;
          </a>
        </li>
      );
    }

    return (
      <>
        <Admin>
          <div className="ms-content-wrapper">
            <div className="row">
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <Card className="main-card mb-12">
                  <CardHeader>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <CardTitle className="font">{constant.deliveryBoyPage.title.deliveryBoy}</CardTitle>
                      </Col>
                      {/* <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <div className="right">
                          <Link to="/add-delivery">
                            <Button
                              className="mb-2 mr-2 custom-button"
                              color="primary"
                            >
                              Add
                            </Button>
                          </Link>
                        </div>
                      </Col> */}
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="search_right">
                      <input
                        className="form-control custom_text_width search"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        onKeyUp={this.searchApplicationDataKeyUp}
                      />
                    </div>

                    {this.state.deliveryboydata.length > 0 ? (
                      <>{this.getTable(this.state.deliveryboydata)}</>
                    ) : (
                        <h1 className="text-center mt-5">{constant.nodatafound}</h1>
                      )}
                    {this.state.deliveryboydata.length > 0
                      ? this.getPageData(
                        pageIncrementBtn,
                        renderPageNumbers,
                        pageDecrementBtn
                      )
                      : ""}
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

export default DeliveryList;
