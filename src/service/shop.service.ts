import Constant from '../constant/constant';
import WebReqUrl from '../helper/web-req/web-req';
import apiUrl from '../helper/apicontroller/apicontroller';
import axios from 'axios';

export default {
    getShopData: async function (data:any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.shopController.getShop,data);
    },
    editStatus: async function (data:any) {
        return await WebReqUrl.put(Constant.apiUrl + apiUrl.shopController.statusChange,data);
    },
    getShopById: async function (data:any) {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.shopController.getShopById + data.id);
    }
}