import { APP_USER_TOKEN } from "../shared/constants"

export const getUserToken =()=>{
    return localStorage.getItem(APP_USER_TOKEN)
}
