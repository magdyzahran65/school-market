<template>
    <div class="from-training mx-auto">
        <h1 class="mx-auto">Login Form Training</h1>
        <form @submit.prevent="" action="">
            <div>
                <label for=""> user </label>
                <input class="w-100" type="text" v-model="user" />
            </div>
            <div>
                <label for=""> userPassword </label>
                <input class="w-100" type="text" v-model="userPassword" />
            </div>
            <div class="m-4">
                <button
                    @click="
                        loginValidations();
                        fillForm();
                    "
                    class="btn btn-info"
                >
                    login
                </button>
                <button @click="fillForm()">fill</button>
            </div>
        </form>
        <p>{{ this.user }}</p>
        <p>{{ this.userPassword }}</p>
    </div>
</template>

<script>
import {
    loginValidations,
    getData,
    fillForm,
} from "../../models/login/apiLoginMethods";

export default {
    name: "FormTraining",
    created() {},
    data() {
        return {
            user: "",
            userPassword: "",
        };
    },

    methods: {
        getData,
        loginValidations,
        fillForm,
    },
};
</script>
