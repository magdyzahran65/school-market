<template>
    <aside :class="closedSidebar ? 'sidebar-closed' : 'sidebar'">
        <div class="coloring-bg">
            <!-- <div class="color-dark"></div>
                <div class="color-dark-two"></div>
                <div class="color-dark-three"></div>
                <div class="color-dark-four"></div>
                <div class="color-dark-five"></div> -->

            <SideHeader :sidebarComp="sidebarComp" />

            <div class="sidebar-ul">
                <ul class="sidebar-ul-links">
                    <li>
                        <transition name="fade-in">
                            <router-link
                                class="router-link"
                                to="/dashboard/student"
                            >
                                <img
                                    class="sidebar-link-img"
                                    :src="
                                        require('../../../../assets/imgs/dashboard/students-icon.png')
                                    "
                                    alt=""
                                />
                                <span>Student</span>
                            </router-link>
                        </transition>
                    </li>
                    <li>
                        <transition name="fade-in">
                            <router-link
                                exact
                                class="router-link"
                                to="/dashboard/parents"
                            >
                                <img
                                    class="sidebar-link-img"
                                    :src="
                                        require('../../../../assets/imgs/dashboard/parents.png')
                                    "
                                    alt=""
                                />
                                <span>Parents</span>
                            </router-link>
                        </transition>
                    </li>
                    <li>
                        <transition name="fade-in">
                            <router-link
                                class="router-link"
                                to="/dashboard/Employees"
                            >
                                <img
                                    class="sidebar-link-img"
                                    :src="
                                        require('../../../../assets/imgs/dashboard/Employees.png')
                                    "
                                    alt=""
                                />
                                <span>Employees</span>
                            </router-link>
                        </transition>
                    </li>
                    <li>
                        <transition name="fade-in">
                            <router-link
                                class="router-link"
                                to="/dashboard/owners"
                            >
                                <img
                                    class="sidebar-link-img"
                                    :src="
                                        require('../../../../assets/imgs/dashboard/owners.png')
                                    "
                                    alt=""
                                />
                                <span>System Owners</span>
                            </router-link>
                        </transition>
                    </li>
                    <li>
                        <transition name="fade-in">
                            <router-link
                                class="router-link"
                                to="/dashboard/Settings"
                            >
                                <img
                                    class="sidebar-link-img"
                                    :src="
                                        require('../../../../assets/imgs/dashboard/settings.png')
                                    "
                                    alt=""
                                />
                                <span>General Settings</span>
                            </router-link>
                        </transition>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>
import SideHeader from "./SideHeader.vue";

export default {
    name: "SidebarSys",
    comments: {
        SideHeader,
    },
    props: {
        sidebarComp: {
            type: Object,
        },
        closedSidebar: {
            type: Boolean,
        },
    },
    data() {
        return {
            index: 0,
        };
    },

    components: { SideHeader },
};
</script>
<style lang="scss" scoped></style>
