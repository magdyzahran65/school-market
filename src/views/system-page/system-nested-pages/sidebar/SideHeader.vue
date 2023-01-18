<template>
    <header class="side-header">
        <img
            class="logo"
            :src="
                require('../../../../assets/imgs/dashboard/' +
                    sidebarComp.sideLogoName)
            "
            alt=""
        />
        <h1 class="side-header-text">
            <span>{{ sidebarComp.sideHeader }}</span>
            <router-link to="/">
                <h6 class="title-m-query">Market</h6>
            </router-link>
        </h1>
    </header>
</template>
<script>
export default {
    name: "SideHeader",
    props: {
        sidebarComp: {
            type: Object,
        },
    },
};
</script>

<style></style>
