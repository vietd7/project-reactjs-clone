let defaultState = {
    captchaImages: "",
    captchaKey: "",
    popupIDLogin: "",
    popupIDRegister: "",
    popupIDNickName: "",
    smsCenter: "",
    otpSms: "",
    smsVeriphone: "",
    popupIDWarning: ""

}

let ActionTypes = {
    UTILS_SAVE_CAPTCHA: "@@utils-reducers/UTILS_SAVE_CAPTCHA",
    UTILS_SAVE_POPUPID_LOGIN: "@@utils-reducers/UTILS_SAVE_POPUPID_LOGIN",
    UTILS_SAVE_POPUPID_REGISTER: "@@utils-reducers/UTILS_SAVE_POPUPID_REGISTER",
    UTILS_SAVE_POPUPID_NICK_NAME: "@@utils-reducers/UTILS_SAVE_POPUPID_NICK_NAME",
    UTILS_SAVE_OTP_SMS: "@@utils-reducers/UTILS_SAVE_OTP_SMS",
    UTILS_SAVE_SMS_VERIPHONE: "@@utils-reducers/UTILS_SAVE_SMS_VERIPHONE",
    UTILS_SAVE_POPUPID_WARNING: "@@utils-reducers/UTILS_SAVE_POPUPID_WARNING"
}

export const saveCaptcha = (captchaImages, captchaKey) => ({type: ActionTypes.UTILS_SAVE_CAPTCHA, captchaImages, captchaKey})
export const savePopupIDLogin = (popupID) => ({type: ActionTypes.UTILS_SAVE_POPUPID_LOGIN, popupID});
export const savePopupIDRegister = (popupID) => ({type: ActionTypes.UTILS_SAVE_POPUPID_REGISTER, popupID});
export const savePopupIDWarning = (popupID) => ({type: ActionTypes.UTILS_SAVE_POPUPID_WARNING, popupID});
export const savePopupIDNickName = (popupID) => ({type: ActionTypes.UTILS_SAVE_POPUPID_NICK_NAME, popupID});
export const saveOtpSms = (data) => ({type: ActionTypes.UTILS_SAVE_OTP_SMS, data});
export const saveSmsVeriphone = (data) => ({type: ActionTypes.UTILS_SAVE_SMS_VERIPHONE, data});

const utils = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.UTILS_SAVE_CAPTCHA:
            return {
                ...state,
                captchaImages: action.captchaImages,
                captchaKey: action.captchaKey
            }
            break;
        case ActionTypes.UTILS_SAVE_POPUPID_LOGIN:
            return {
                ...state,
                popupIDLogin: action.popupID
            }
            break;
        case ActionTypes.UTILS_SAVE_POPUPID_REGISTER:
            return {
                ...state,
                popupIDRegister: action.popupID
            }
        case ActionTypes.UTILS_SAVE_POPUPID_NICK_NAME:

            return {
                ...state,
                popupIDNickName: action.popupID
            }
            break;
        case ActionTypes.UTILS_SAVE_OTP_SMS:

            return {
                ...state,
                smsCenter: action.data.smsCenter,
                otpSms: action.data.content
            }
            break;
        case ActionTypes.UTILS_SAVE_SMS_VERIPHONE:
            console.log("save reducers sms veriphone", action.data);
            return {
                ...state,
                smsVeriphone: action.data.content
            }
            break;
        case ActionTypes.UTILS_SAVE_POPUPID_WARNING:
            return {
                ...state,
                popupIDWarning: action.popupID
            }

    }
    return state;
}
export default utils;
