import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch, HashRouter,Redirect } from 'react-router-dom';
import DashboardContent from './views/Dashboard/Dashboard';
import UserProfile from './views/UserProfile/UserProfile';
import ChangePassword from './views/changepassword/changepassword';
import Users from './views/usersmanagment/users/users';
import AddUser from './views/usersmanagment/adduser/adduser';
import UserRole from './views/usersmanagment/userrole/userrole';
import AddUserRole from './views/usersmanagment/adduserrole/adduserrole';
import UserRoleToRights from './views/usersmanagment/userroletorights/userroletorights';
import ViewUser from './views/usersmanagment/viewuser/viewuser';
import ViewUserRole from './views/usersmanagment/viewuserrole/viewuserrole';
import Category from './views/categorymanagment/category/category';
import SubCategory from './views/categorymanagment/subcategory/subcategory';
import AddCategory from './views/categorymanagment/addcategory/addcategory';
import AddSubCategory from './views/categorymanagment/addsubcategory/addsubcategory';
import ViewCategory from './views/categorymanagment/viewcategory/viewcategory';
import ViewSubCategory from './views/categorymanagment/viewsubcategory/viewsubcategory';
import AreaManagement from './views/areamanagment/areamanagment';
import Shop from './views/shopmanagement/shop/shop';
import AddShop from './views/shopmanagement/addshop/addshop';
import ViewShop from './views/shopmanagement/viewshop/viewshop';
import ShopVerification from './views/shopmanagement/shopverification/shopverification';
import AddShopVerification from './views/shopmanagement/addshopverification/addshopverification';
import ViewShopVerification from './views/shopmanagement/viewshopverification/viewshopverification';
import Products from './views/productmanagment/productmanagement';
import AddProduct from './views/productmanagment/addproduct/addproduct';
import ViewProduct from './views/productmanagment/viewproduct/viewproduct';
import Orders from './views/ordermanagement/order/order';
import ViewOrder from './views/ordermanagement/vieworder/vieworder';
import DeliveryList from './views/deliverymanagement/delivery/delivery';
import AddDelivery from './views/deliverymanagement/adddelivery/adddelivery';
import ViewDelivery from './views/deliverymanagement/viewdelivery/viewdelivery';
import DeliveryVerification from './views/deliverymanagement/deliveryverification/deliveryverification';
import AddDeliveryVerification from './views/deliverymanagement/addverification/addverification';
import ViewDeliveryVerification from './views/deliverymanagement/viewverification/viewverification';
import Frenchise from './views/franchisemanagment/franchise/franchise';
import AddFrenchise from './views/franchisemanagment/addfrenchise/addfrenchise';
import ViewFrenchise from './views/franchisemanagment/viewfrenchise/viewfrenchise';
import ListPaymentDetail from './views/paymentmanagment/payment/payment';
import ViewPayment from './views/paymentmanagment/viewpayment/viewpayment';
import ListPayOutDetail from './views/paymentmanagment/payout/payout';
import ViewPayout from './views/paymentmanagment/viewpayout/viewpayout';
import Rating from './views/ratingmanagment/rating/rating';
import ViewRating from './views/ratingmanagment/viewrating/viewrating';
import RatingData from './views/ratingmanagment/ratingdata/ratingddata';
import ViewRatingData from './views/ratingmanagment/viewratingdata/viewratingdata';
import RatingMaster from './views/ratingmanagment/ratingmaster/ratingmaster';
import ViewRatingMaster from './views/ratingmanagment/viewratingmaster/viewratingmaster';
import ListArea from './views/areamanagment/listarea/listarea';
import ViewArea from './views/areamanagment/viewarea/viewarea';
import Page404 from './views/pagenotfound/pagenotfound';
const hist = createBrowserHistory();

class Main extends React.Component<{history:any}> {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route path='/dashboard' name='Dashboard' render={(props: any) => <DashboardContent {...props} />} />
            <Route path='/user' name='User Profile' render={(props: any) => <UserProfile {...props} />} />
            <Route path='/change-password' name='Change Password' render={(props: any) => <ChangePassword {...props} />} />
            <Route path='/users' name='Users' render={(props: any) => <Users {...props} />} />
            <Route path='/adduser' name='Add User' render={(props: any) => <AddUser {...props} />} />
            <Route path='/edituser' name='Add User' render={(props: any) => <AddUser {...props} />} />
            <Route path='/viewuser/:id' name='View User' render={(props: any) => <ViewUser {...props} />} />
            <Route path='/role' name='Role' render={(props: any) => <UserRole {...props} />} />
            <Route path='/adduserrole' name='Add Role' render={(props: any) => <AddUserRole {...props} />} />
            <Route path='/edituserrole' name='Add Role' render={(props: any) => <AddUserRole {...props} />} />
            <Route path='/viewuserrole' name='View Role' render={(props: any) => <ViewUserRole {...props} />} />
            <Route path='/role-privileges' name='Role Privileges' render={(props: any) => <UserRoleToRights {...props} />} />
            <Route path='/category' render={(props: any) => <Category {...props} />} />
            <Route path='/subcategory' render={(props: any) => <SubCategory {...props} />} />
            <Route path='/addcategory' render={(props: any) => <AddCategory {...props} />} />
            <Route path='/editcategory' render={(props: any) => <AddCategory {...props} />} />
            <Route path='/addsubcategory' render={(props: any) => <AddSubCategory {...props} />} />
            <Route path='/editsubcategory' render={(props: any) => <AddSubCategory {...props} />} />
            <Route path='/viewcategory' render={(props: any) => <ViewCategory {...props} />} />
            <Route path='/viewsubcategory' render={(props: any) => <ViewSubCategory {...props} />} />
            <Route path='/list-area' render={(props: any) => <ListArea {...props} />} />
            <Route path='/area' render={(props: any) => <AreaManagement {...props} />} />
            <Route path='/editarea' render={(props: any) => <AreaManagement {...props} />} />
            <Route path='/viewarea' render={(props: any) => <ViewArea {...props} />} />
            <Route path='/shop' render={(props: any) => <Shop {...props} />} />
            <Route path='/addshop' render={(props: any) => <AddShop {...props} />} />
            <Route path='/editshop' render={(props: any) => <AddShop {...props} />} />
            <Route path='/viewshop/:id' render={(props: any) => <ViewShop {...props} />} />
            <Route path='/shop-verification' render={(props: any) => <ShopVerification {...props} />} />
            <Route path='/add-shop-verification' render={(props: any) => <AddShopVerification {...props} />} />
            <Route path='/edit-shop-verification' render={(props: any) => <AddShopVerification {...props} />} />
            <Route path='/view-shop-verification' render={(props: any) => <ViewShopVerification {...props} />} />
            <Route path='/product' render={(props: any) => <Products {...props} />} />
            <Route path='/add-product' render={(props: any) => <AddProduct {...props} />} />
            <Route path='/edit-product' render={(props: any) => <AddProduct {...props} />} />
            <Route path='/view-product' render={(props: any) => <ViewProduct {...props} />} />
            <Route path='/order' render={(props: any) => <Orders {...props} />} />
            <Route path='/view-order-details' render={(props: any) => <ViewOrder {...props} />} />
            <Route path='/delivery' render={(props: any) => <DeliveryList {...props} />} />
            <Route path='/add-delivery' render={(props: any) => <AddDelivery {...props} />} />
            <Route path='/edit-delivery' render={(props: any) => <AddDelivery {...props} />} />
            <Route path='/view-delivery-boy/:id' render={(props: any) => <ViewDelivery {...props} />} />
            <Route path='/delivery-verification' render={(props: any) => <DeliveryVerification {...props} />} />
            <Route path='/add-delivery-verification' render={(props: any) => <AddDeliveryVerification {...props} />} />
            <Route path='/edit-delivery-verification' render={(props: any) => <AddDeliveryVerification {...props} />} />
            <Route path='/view-delivery-verification' render={(props: any) => <ViewDeliveryVerification {...props} />} />
            <Route path='/frenchise' render={(props: any) => <Frenchise {...props} />} />
            <Route path='/add-frenchise' render={(props: any) => <AddFrenchise {...props} />} />
            <Route path='/edit-frenchise' render={(props: any) => <AddFrenchise {...props} />} />
            <Route path='/view-frenchise' render={(props: any) => <ViewFrenchise {...props} />} />
            <Route path='/payment' render={(props: any) => <ListPaymentDetail {...props} />} />
            <Route path='/view-payment' render={(props: any) => <ViewPayment {...props} />} />
            <Route path='/payout' render={(props: any) => <ListPayOutDetail {...props} />} />
            <Route path='/view-payout' render={(props: any) => <ViewPayout {...props} />} />
            <Route path='/rating' render={(props: any) => <Rating {...props} />} />
            <Route path='/view-rating' render={(props: any) => <ViewRating {...props} />} />
            <Route path='/rating-data' render={(props: any) => <RatingData {...props} />} />
            <Route path='/view-rating-data' render={(props: any) => <ViewRatingData {...props} />} />
            <Route path='/rating-master' render={(props: any) => <RatingMaster {...props} />} />
            <Route path='/view-rating-master' render={(props: any) => <ViewRatingMaster {...props} />} />
            {
                    this.props.history.location.pathname != '/' ? (
                      <Route path="*" component={Page404}/>
                    ) : (
                      ""
                    )
                  }
            <Redirect from="/" to="/dashboard" />
        </Switch>
        </HashRouter>
    )
  }
}

export default Main;