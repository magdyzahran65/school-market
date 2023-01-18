<template>
    <div>
        <h1 class="text-center mt-0 text-bg-success">Vue Router Training</h1>
        <!-- <h1 class="text-center"></h1> -->

        <div class="container"></div>
        <div class="row">
            <form
                class="d-flex flex-column align-items-center"
                @submit.prevent="login()"
            >
                <div>
                    <label>Name</label>
                    <input
                        autocomplete
                        v-model="loginModal.user"
                        class=""
                        type="text"
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        autocomplete
                        class=""
                        type="password"
                        v-model="loginModal.userPassword"
                    />
                </div>

                <button type="submit" class="btn btn-info mt-4 w-25">
                    login
                </button>
            </form>
            <div
                style="animation: fade-in 0.2s ease-in-out"
                v-show="loginMsg != ''"
                class="alert alert-danger w-75 m-auto mt-5"
                role="alert"
            >
                <h2 class="m-auto text-center">{{ loginMsg }}</h2>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "RouterTraining",

    methods: {
        async login() {
            await axios
                //  The Url has Been Added to axios.js (axios.defaults.baseURL = "BaseURL")
                .post("api/UsersAuthentication/UserLogin", this.loginModal)
                .then((res) => {
                    console.log(res);
                    if (res.data.status == 406) {
                        this.loginMsg = res.data.msg;
                        console.log(res.data.msg);
                        // =========================
                    } else if (res.data.status == 200) {
                        this.loginMsg = res.data.msg;
                        this.$router.push("/dashboard");
                        // =========================
                    } else if (res.status == 420) {
                        this.ERR_NETWORK = "Check Your Network Connection";
                        this.$router.push("/rout");
                    }
                })

                .catch((error) => {
                    console.error(error);
                });
        },
    },
    data() {
        return {
            loginMsg: "",

            SUCCESS: 200, // success operation
            INVALID_TOKEN: 498, //invalid token
            CATCH: 500, // catch
            NO_CONTENT: 204, // no data
            ERROR: 406, // validation
            VERSION: 306, // error version
            INVALID_LOGIN_CODE: 499, // error login code
            NO_INTERNET: 420, // no internet
            NO_RESPONSE: 421, // no response

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
        };
    },
};
</script>
