import axios from "axios"
import { processUsersResponse } from "../utilities/UserUtility"

const API_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

export const getUsers = (setUsers) =>{
    axios.get(API_URL).then((res)=>{
        console.log('res:', res)
        setUsers(processUsersResponse(res.data)).catch(err=> console.error("err",err))
    })
}
