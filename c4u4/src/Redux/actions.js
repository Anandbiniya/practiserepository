// use axios for api call
import axios from "axios";

function getProductsData(val) {
    return {type:"getData",payload:val}
}

const sortProducts = (val) => {
    console.log('val:', val)

    return {type:"sortData",payload:val}
};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
