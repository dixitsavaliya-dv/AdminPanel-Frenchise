const apiUrl = {
    userController: {
        createData:'admin/signin',
        getData:'shared/user',
        getDataById:'user/',
        forgotpassword:'shared/app-forgot-password',
        updateData:'shared/user-update',
        updateProfilePicture:'shared/user-profile-picture',
        getCount:'user',
        getUserPaginationData:'user',
        updatePassword:'shared/app-change-password',
        verifyOtp:'shared/app-verify-otp',
        resetPassword:'shared/app-reset-password'

    },
    shopController: {
        getShop:'admin/shop/list',
        statusChange:'admin/shop/status',
        getShopById:'admin/shop/'
    },
    deliveryBoyController: {
        getDeliveryBoy:'admin/delivery-boy/list',
        statusChange:'admin/delivery-boy/status',
        getDeliveryBoyById:'admin/delivery-boy/'
    },
    customerController: {
        getCustomer:'admin/customer/list',
        statusChange:'admin/customer/status',
        getCustomerById:'admin/customer/'
    },
    frenchiseController: {
        getServiceArea:'common/area/list',
        statusChange:'admin/customer/status',
        getCustomerById:'admin/customer/',
        getFrenchiseList:'admin/franchise/list',
        addFrenchise:'admin/franchise/create',
        getFrenchiseById:'admin/franchise/',
        updateFrenchiseById:'admin/franchise/'
    },
}

export default apiUrl;