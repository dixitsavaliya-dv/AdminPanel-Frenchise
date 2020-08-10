import Constant from '../constant/constant';
import WebReqUrl from '../helper/web-req/web-req';
import apiUrl from '../helper/apicontroller/apicontroller';
import axios from 'axios';

export default {
    loginUser: async function (data: any) {
        return await axios.post(Constant.apiUrl + apiUrl.userController.createData, data);
    },
    forgotPassword: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.forgotpassword, data);
    },
    otpVerify: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.verifyOtp, data);
    },
    resetPassword: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.resetPassword, data);
    },
    getProfile: async function (data:any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.getData,data);
    },
    updateProfile: async function (data: any) {
        return await WebReqUrl.put(Constant.apiUrl + apiUrl.userController.updateData, data);
    },
    updatePassword: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.updatePassword, data);
    },
    getUserCount: async function () {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getCount);
    },
    getUserDataPagination: async function () {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getUserPaginationData);
    },
    updateProfilePicture: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.updateProfilePicture, data);
    },
    
}