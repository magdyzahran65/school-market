<template>
    <div class="body-container">
        <!-- sidebar -->
        <SidebarSys :closedSidebar="closedSidebar" :sidebarComp="sidebarComp" />
        <div class="pages-container">
            <!-- main header nav -->
            <HeaderSys @closeSidebar="closeSidebar()" />
            <div class="pages">
                <!-- <button
                    @click="
                        emptyData();
                        logout();
                    "
                >
                    Test Logout
                </button> -->
                <transition name="turnPage" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
            <footer class="system-footer">
                <div class="copyright">
                    © All rights reserved to Market School System - 2022 |
                    Designed and developed by Admins - Egypt for software
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import SidebarSys from "./system-nested-pages/sidebar/SidebarSys.vue";
import HeaderSys from "./system-nested-pages/header-system/HeaderSys.vue";
import axios from "axios";
export default {
    name: "MainComponent",

    components: {
        SidebarSys,
        HeaderSys,
    },
    data() {
        return {
            sidebarComp: {
                sideLogoName: "food-shop-logo.jpg",
                sideHeader: "School Market System",
            },
            closedSidebar: true,
            user: "",
            userPassword: "",
        };
    },
    methods: {
        closeSidebar: function () {
            this.closedSidebar = !this.closedSidebar;
        },
        emptyData: function () {
            this.$store.state.loginModal.user = "";
            this.$store.state.loginModal.userPassword = "";
        },
        logout: function () {
            axios
                .post(
                    "api/UsersAuthentication/UserLogout",
                    this.$store.state.loginModal
                )
                .then((res) => console.log(res), this.$router.push("/"))
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style>
.turnPage-enter-active {
    animation: turnPage 1s;
}
.turnPage-leave-active {
    animation: turnPage-leave 1s;
}
</style>
