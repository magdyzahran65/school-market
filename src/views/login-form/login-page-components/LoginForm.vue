<template>
    <div>
        <form @submit.prevent="loginV" class="login-form">
            <div class="inputs-div">
                <label for="username">Username </label>
                <input
                    autocomplete
                    v-model="user"
                    name="user"
                    class="login-input"
                    type="text"
                    placeholder="Your Username"
                />
            </div>

            <div class="inputs-div">
                <label for="password">Password </label>
                <div class="input-icon-container">
                    <input
                        autocomplete
                        v-model="userPassword"
                        name="userPassword"
                        class="login-input"
                        :type="showPass ? 'text' : 'password'"
                        placeholder="Your Password"
                    />
                    <i
                        @click="showPassword()"
                        :class="
                            showPass
                                ? 'fa-regular fa-eye-slash'
                                : 'fa-regular fa-eye'
                        "
                    ></i>
                </div>
            </div>
            <div class="btn-container-login">
                <!-- @click="pauseLoading" -->
                <button
                    @click="
                        pauseLoading();
                        fillForm();
                        loginValidations();
                    "
                    type="submit"
                    class="btn btn-success sub-btn"
                >
                    login
                </button>
            </div>
        </form>
        <div
            id="login-alert"
            style="animation: fade-in 0.2s ease-in-out"
            v-show="this.$store.state.loginMsg != ''"
            class="alert alert-danger m-auto mt-3"
            role="alert"
        >
            <p class="m-auto text-center">
                {{ this.$store.state.loginMsg }}
            </p>
        </div>
    </div>
</template>
<script>
import {
    loginValidations,
    getData,
    fillForm,
} from "@/models/login/apiLoginMethods";

export default {
    name: "LoginForm",

    props: {
        login: {
            type: Object,
        },
        //
        showPass: {
            type: Boolean,
        },
    },
    data() {
        return {
            user: "",
            userPassword: "",
            inputEmpty: false,
        };
    },

    methods: {
        showPassword: function () {
            this.$emit("showPassword");
        },
        pauseLoading: function () {
            this.$emit("pauseLoading");
        },

        loginV: function () {
            this.$emit("loginV");
        },

        getData,
        loginValidations,
        fillForm,
    },
};
</script>

<style></style>
