import {
    USER_SETTING_SAVE_ACTION,
    USER_LOGOUT_ACTION
} from './constant';

export const saveSettings = (profileUrl, userName, shortBio, updatedEmail, password) => ({
    type: USER_SETTING_SAVE_ACTION,
    payload:{image: profileUrl, username: userName, bio: shortBio, email: updatedEmail, password: password}
});


export const logout = () => ({
    type: USER_LOGOUT_ACTION
});

