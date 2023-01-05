<template>
    <div class="login-page">
        <AppHeader />

        <!-- Login Page -->
        <LoadingAnimation v-show="pause" />
        <LoginHeading :loginHeading="loginHeading" />
        <LoginForm
            :showPass="showPass"
            @showPassword="showPassword"
            @pauseLoading="pauseLoading()"
        />

        <AppFooter />
    </div>
</template>

<script>
// import axios from "axios";
import AppHeader from "../app-view/header/AppHeader.vue";
import LoginHeading from "./login-page-components/LoginHeading.vue";
import LoadingAnimation from "./login-page-components/LoadingAnimation.vue";
import LoginForm from "./login-page-components/LoginForm.vue";
import AppFooter from "../app-view/footer/AppFooter.vue";
// import store from "@/store";

// import apiLoginMethods from "@/models/login/apiLoginMethods";

import { loginValidations } from "@/models/login/apiLoginMethods";

export default {
    name: "LoginPage",
    components: {
        AppHeader,
        LoginHeading,
        LoginForm,
        LoadingAnimation,
        AppFooter,
    },

    data() {
        return {
            user: "",
            userPassword: "",
            pause: false,
            showPass: false,
            loginHeading: "Login To Your Account",
        };
    },

    methods: {
        // async login() {
        //     await axios
        //         //  The Url has Been Added to axios.js (axios.defaults.baseURL = "BaseURL")

        //         .post("api/UsersAuthentication/UserLogin", this.loginModal)
        //         .then((res) => {
        //             // console.log(res.data);
        //             if (res.data.status == 406) {
        //                 this.pause = false;
        //                 this.$store.state.loginMsg = res.data.msg;
        //                 // console.log(res.data.msg);

        //                 // =========================
        //             } else if (res.data.status === 200) {
        //                 this.$store.state.loginMsg = res.data.msg;
        //                 this.$router.push("/dashboard");
        //                 console.log(res.data.msg);

        //                 // =========================
        //             } else if (res.status == 420) {
        //                 // this.ERR_NETWORK = "Check Your Network Connection";
        //                 this.$router.push("/rout");
        //             }
        //         })

        //         .catch((error) => {
        //             console.error(error);
        //         });
        // },
        // pauseLoading: function () {
        //     this.pause = !this.pause;
        // },
        showPassword: function () {
            this.showPass = !this.showPass;
        },
        pauseLoading: function () {
            this.pause = !this.pause;
        },

        loginValidations,

        //
    },
};
</script>

<style lang="scss"></style>
