<template>
    <span>
        <MainComponent />
    </span>
</template>

<script>
import MainComponent from "./MainComponent.vue";
export default {
    data() {
        return {
            ok: "",
        };
    },
    beforeRouteEnter(to, from, next) {
        next();
    },
    name: "SystemPage",
    components: {
        MainComponent,
    },
};
</script>
