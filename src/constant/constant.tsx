export default {
signin:'Sign In',
email:'E-Mail',
password:'Password',
login:'Log In',
signup:'Sign Up',
forgotpassword:'Forgot Password',
dashboard:'Dashboard',
notmember:'Not Member?',
apiUrl: 'http://delivery-b.digitalvichar.in/api/',
headers: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzNjgwMzc1LCJleHAiOjE1OTM2ODc1NzV9.jc1NOHGWLgaeqra6RMM71vhIHSFf1GNUbvob66Wip4c',
    apikey: 'courierservice-0000-9876-5432-10@@',
    'Access-Control-Allow-Origin': true
},
changePassword:'Change Password',
profile: 'Profile',
userTitle:'Users',
viewUser:'View User',
userRoleTitle:'User Role',
viewUserRole:'View User Role',
addUserTitle:'Add User',
adduserRoleTitle:'Add User Role',
rolePrivilegesTitle:'Role Previleges',
addCategoryTitle:'Add Category',
categoryTitle:'Catgeory',
viewCategoryTitle:'View Category',
addDelivery:'Add Delivery',
addVerification:'Add Verification',
delivery:'Delivery',
deliveryVerification:'Delivery Verificaton',
viewDelivery:'View Delivery',
viewVerification:'View Verification',
addFrenchise:'Add Frenchise',
frenchise:'Frenchise',
viewFrenchise:'View Frenchise',
order:'Order',
viewOrder:'View Order',
payment:'Payment',
payout:'Payout',
viewPayment:'View Payment',
viewPayout:'View Payout',
addProduct:'Add Product',
viewProduct:'View Product',
product:'Product',
rating:'Rating',
ratingData:'Rating Data',
ratingMaster:'Rating Master',
viewRating:'View Rating',
viewRatingData:'View Rating Data',
viewRatingMaster:'View Rating Master',
addShop:'Add Shop',
addShopVerification:'Add Shop Verification',
shop:'Shop',
shopVerification:'Shop Verification',
viewShop:'View Shop',
viewShopVerification:'View Shop Verification',

nodatafound:'No Data Found',

tableAction: {
    status: "Status",
    action: "Action",
  },

  button: {
    update:'Update',
    Save:'Save',
    back:'Back',
    add:'Add'
  },

recordPerPage: {
    recordperPage: "Record Per Page",
    fifteen: "15",
    twenty: "20",
    thirty: "30",
    fifty: "50",
  },

loginPage:{
    state:{
        password: "",
        passworderror: "",
        email: '',
        emailerror: "",
        type: "password",
        mobile:'',
        mobileerror:'',
        isModel:false,
        id:'',
        otp:'',
        otperror:'',
        reqToken:'',
        newpassword:'',
        newpassworderror:''
    },
    title:{
        email:'E-Mail',
        password:'Password',
        forgotpassword:'Forgot Password',
        signin:'Sign In',
        recover:'Enter your mobile number to recover your password',
        getotp:'Get OTP',
        verifyotp:'Verify OTP',
        enterotp:'Enter OTP',
        verify:'Verify',
        resetpassword:'Reset Password',
        newpassword:'New Password',
        savepassword:'Save Password'
    }
},

shopPage:{
    title:{
        shopmanagement:'Shop Management'
    },
    state:{
        count: "10",
      currentPage: "1",
      items_per_page: "10",
      upperPageBound: 3,
      lowerPageBound: 0,
      pageBound: 3,
      onItemSelect: "",
      shopdata: [],
      switchSort: false,
      isStatus: false,
    },
    shopTableColumn:{
        username:'User Name',
        shopname:'Shop Name',
        createdAt:'CreatedAt'
    },
    viewshopdetails:{
        detail:'View Shop Details'
    }
},
deliveryBoyPage:{
    title:{
        deliveryBoy:'Delivery Boy Management'
    },
    state:{
        count: "10",
      currentPage: "1",
      items_per_page: "10",
      upperPageBound: 3,
      lowerPageBound: 0,
      pageBound: 3,
      onItemSelect: "",
      deliveryboydata: [],
      switchSort: false,
      isStatus: false,
    },
    deliveryBoyTableColumn:{
        username:'Delivery Boy Name',
        email:'E-Mail',
        createdAt:'CreatedAt',
        mobilenumber:'Mobile Number',
        userimage:'Delivery Boy Image'
    },
    viewdeliverydetails:{
        detail:'View Delivery Boy Details'
    }
},
userPage:{
    title:{
        user:'User Management'
    },
    state:{
        count: "10",
      currentPage: "1",
      items_per_page: "10",
      upperPageBound: 3,
      lowerPageBound: 0,
      pageBound: 3,
      onItemSelect: "",
      userdata: [],
      switchSort: false,
      isStatus: false,
    },
    userTableColumn:{
        username:'Customer Name',
        email:'E-Mail',
        createdAt:'CreatedAt',
        mobilenumber:'Mobile Number',
        userimage:'Delivery Boy Image'
    },
    viewuserdetails:{
        detail:'View User Details'
    }
},
frenchisePage:{
    title:{
        frenchise:'Frenchise Management',
        addfrenchise:'Add Frenchise',
        updatefrenchise:'Update Frenchise'
    },
    state:{
        selectuser:'',
        selectusererror:'',
        address:'',
        addresserror:'',
        servicearea:'',
        serviceareaerror:'',
        updateTrue:false,
        area:[],
        userid:0,
        frenchiseid:0,
        serviceareaname:'',


        count: "10",
        currentPage: "1",
        items_per_page: "10",
        upperPageBound: 3,
        lowerPageBound: 0,
        pageBound: 3,
        onItemSelect: "",
        frenchisedata: [],
        switchSort: false,
        isStatus: false,
    },
    frenchiseTableColumn:{
        username:'Customer Name',
        email:'E-Mail',
        createdAt:'CreatedAt',
        mobilenumber:'Mobile Number',
        userimage:'Delivery Boy Image',
        selectuser:'Select User',
        selectarea:'Select Service Area',
        address:'Address',
        verificationstatus:'Verification Status',
        servicearea:'Service Area'
    },
    viewFrenchisedetails:{
        detail:'View Frenchise Details'
    }
},
}