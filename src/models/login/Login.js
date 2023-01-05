import {
    ESTABLISHMENT_TOKEN,
    USER_PLATFORM_SESSION_DATA,
    USER_DEVICE_DATA,
    USER_APP_SETTING_DATA,
} from "@/utility/constants";

export default class LoginModel {
    constructor() {
        this.user = "";
        this.userPassword = "";
        this.establishmentToken = ESTABLISHMENT_TOKEN;
        this.userPlatformSessionData = USER_PLATFORM_SESSION_DATA;
        this.userDeviceData = USER_DEVICE_DATA;
        this.userAppSettingData = USER_APP_SETTING_DATA;
    }
    // setInitialLoginData() {}
}
export let userLogin = new LoginModel();
