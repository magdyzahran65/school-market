<template>
    <div class="loading">
        <h3>{{ animationTitle }}</h3>
        <div class="loading-animation-big">
            <div class="loading-animation">
                <span class="dote-animation"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { loginValidations } from "@/models/login/apiLoginMethods";
export default {
    name: "LoadingAnimation",
    props: {
        // pause: {
        //     type: Boolean,
        // },
    },

    data() {
        return {
            animationTitle: "Loading",
        };
    },
    methods: {
        loginValidations,
    },
};
</script>
