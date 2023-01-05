<template>
    <section class="pages-content">
        <AppHeader />
        <WelComeTitleCapping :imgName="imgName" :pageTitle="pageTitle" />
        <ImgSlider :SliderImgsNames="SliderImgsNames" />
        <MissionComponent :firstSection="firstSection" />
        <VisionComponent :secondSection="secondSection" />
        <AppFooter />
    </section>
</template>

<script>
import AppHeader from "../app-view/header/AppHeader.vue";
import WelComeTitleCapping from "./WelcomeTitleCapping.vue";
import ImgSlider from "./welcome-components/ImgSlider.vue";
import MissionComponent from "./welcome-components/MissionComponent.vue";
import VisionComponent from "./welcome-components/VisionComponent.vue";
import AppFooter from "@/views/app-view/footer/AppFooter.vue";
export default {
    name: "WelcomePage",

    props: {
        imgName: {
            type: String,
        },
        pageTitle: {
            type: String,
        },
        SliderImgsNames: {
            type: Object,
        },
        firstSection: {
            type: Object,
        },
        secondSection: {
            type: Object,
        },
    },
    components: {
        AppHeader,
        WelComeTitleCapping,
        ImgSlider,
        MissionComponent,
        VisionComponent,
        AppFooter,
    },
};
</script>

<style lang="scss"></style>
