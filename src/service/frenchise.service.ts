import Constant from '../constant/constant';
import WebReqUrl from '../helper/web-req/web-req';
import apiUrl from '../helper/apicontroller/apicontroller';
import axios from 'axios';

export default {
    getServiceArea: async function () {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.frenchiseController.getServiceArea);
    },
    editStatus: async function (data:any) {
        return await WebReqUrl.put(Constant.apiUrl + apiUrl.deliveryBoyController.statusChange,data);
    },
    getDeliveryBoyById: async function (data:any) {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.deliveryBoyController.getDeliveryBoyById + data.id);
    },
    getFrenchiseData: async function (data:any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.frenchiseController.getFrenchiseList, data);
    }
    
}