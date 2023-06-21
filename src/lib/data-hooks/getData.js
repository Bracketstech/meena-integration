import getAboutData from "./getAboutData";
import getHomeData from "./getHomeData";

const { default: client } = require("../client");

const getData = async (pageName,isAr)=>{

        switch (pageName) {
            case '/':
                return await getHomeData()
                break;
            case '/about':
                break; await getAboutData()
        
        }
    }


  export default getData