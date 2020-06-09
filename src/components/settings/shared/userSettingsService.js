import {
    USER_SETTING_SAVE_END_POINT
} from './constant';
import http from '../../../services/http-service';

export const saveUserSettingService = ({ image, username, bio, email, password }) => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}${USER_SETTING_SAVE_END_POINT}`;
    let user = {
        image: image,
        username,
        email,
        bio: bio !== "" ? bio : null
    }
    if (password) {
        user = { ...user, password }
    }
    return http.put(url, {user});
}
