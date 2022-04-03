import config from "../constants";
export const getTotalPages = (length)=>{
    return Math.floor(length/10)
}

export const getRecIndex = (page)=>{
    return (page-1)*config.PAGE_SIZE;
}