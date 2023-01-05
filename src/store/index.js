import Vue from "vue";
import Vuex from "vuex";
import UserLogin from "../models/login/Login";
import { constants } from "@/utility/constants";

Vue.use(Vuex, constants);
// console.log(userLogin);
export default new Vuex.Store({
    state: {
        pause: true,
        // names: [
        //     { name: "Mohamed", age: 36, Department: "HTML", salary: 3000 },
        //     { name: "Magdy", age: 35, Department: "CSS", salary: 6000 },
        //     { name: "Ali", age: 36, Department: "JS", salary: 8000 },
        // ],
        UserLogin: "",
        isLoggedIn: false,
        status: "",
        loginModal: {
            user: "",
            userPassword: "",
            establishmentToken: "F92DFB74-9CB9-44AD-B5AD-A946C3D1018F",
            userPlatformSessionData: {
                userPlatFormSessionVersionNumber: "1.0",
                userPlatFormSessionLocalIP: "",
                userPlatFormSessionGlobalIP: "",
                userPlatFormSessionAddress: "",
                userPlatFormSessionLat: "",
                userPlatFormSessionLong: "",
                userPlatFormToken: "PFT-3",
                userFirebaseToken: "2222",
            },
            userDeviceData: {
                userDeviceUniqueCode: "515",
                userDeviceId: "",
                userDeviceName: "",
                userDeviceCompany: "",
                userDeviceOS: "",
                userDeviceVersionOS: "",
                userDeviceEMUI: "54582107.16064581",
                userDeviceRam: "",
                userDeviceProcessor: "",
                userDeviceDisplay: "",
                userDeviceModel: "",
                userDeviceSerial: "",
                userDeviceDescription: "",
                userDeviceNotes: "",
            },
            //Set only First Time Login
            //but every login Change language only
            userAppSettingData: {
                languageToken: "en-US",
                themeToken: "THEM-2",
                decimalFormatToken: "",
                timeZoneToken: "Egypt Standard Time",
                dateFormatToken: "dddd, dd MMMM yyyy",
                timeFormatToken: "hh:mm:ss tt",
                currencyToken: "EGP",
                printCodeTypeToken: "",
                startDayOfWeekToken: "DOF-1",
                startMonthOfYear: 1,
                startDayOfMonth: 25,
                receiveNotificationStatus: true,
                customSettings: "",
            },
        },
        // names: loginModel,
        loginMsg: "",
    },
    getters: {
        currentUser: (state) => state,
        isLoggedIn: (state) => state.isLoggedIn,

        // ====================
        userLogin: () => {
            let Login = new UserLogin();
            return Login;
        },
        // ==================
        // login: () => {
        //     // let loginData = this.state.userLogin;
        //     // loginData.map((x) => {
        //     //     return {};
        //     // });
        // },
        // modifiedInfo: (state) => {
        //     let infoPerson = state.names.map((x) => {
        //         return {
        //             name: "Mr : " + x.name,
        //             age: "Age : " + x.age,
        //             Department: "Department : " + x.Department,
        //             salary: "Salary : " + x.salary,
        //         };
        //     });
        //     return infoPerson;
        // },
    },
    mutations: {
        // mutation Function (Will Be Global)
        // increasesSalary: (state) => {
        //     state.names.forEach((x) => {
        //         x.salary += 200;
        //     });
        // },
        // minus: (state) => {
        //     return state.names.forEach((x) => {
        //         return (x.salary -= 100);
        //     });
        // },
    },
    actions: {
        minusSalary: (context) => {
            return setTimeout(function () {
                console.log("Done");

                context.commit("minus");
            }, 2000);
        },
    },
    modules: {},
});
