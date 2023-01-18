<template>
    <header class="main-header-login">
        <HeaderProject :logoName="logoName" :projectName="projectName" />
        <HeaderNavLogin
            :langImgName="langImgName"
            :loginIcon="loginIcon"
            :loginWord="loginWord"
        />
    </header>
</template>

<script>
import HeaderProject from "./HeaderProject.vue";
import HeaderNavLogin from "./HeaderNavLogin.vue";
export default {
    name: "AppHeader",
    components: {
        HeaderProject,
        HeaderNavLogin,
    },
    data() {
        return {
            logoName: "food-shop-logo.jpg",
            projectName: "School Market System",
            langImgName: "lang-ar.svg",
            loginIcon: "fa-regular fa-user",
            loginWord: "l o g I n",
        };
    },
};
</script>
