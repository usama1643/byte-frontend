import Axios from "axios";
import { backendUrl } from "../";

let resturantURL = "https://server.thebyte.app/open/merchant/get";


const ResturantApis = {

    getResturant(data) {
        return Axios({
            url: resturantURL,
            method: "post",
            data: data,
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => response.data);
    }
}

export default ResturantApis