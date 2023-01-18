<template>
    <div class="main-header">
        <div class="page-heading">
            <span @click="changeIcon()">
                <i
                    class="close-sidebar-icon"
                    @click="closeSidebar()"
                    :class="menuIcon ? iClassClose : iClassOpen"
                ></i>
            </span>
            <img
                class="title-icon"
                :src="
                    require('../../../../assets/imgs/dashboard/' +
                        pagesTitles[indexTitle].headerImg)
                "
                alt=""
            />

            <div class="page-name">{{ pagesTitles[indexTitle].pageName }}</div>
        </div>
        <AddUser @closeUserForm="closeUserForm" :addUserForm="addUserForm" />
        <nav>
            <button class="nav-m-query">
                <li>
                    <img
                        :src="
                            require('../../../../assets/imgs/dashboard/user-img.png')
                        "
                        alt=" pic"
                    />
                </li>
            </button>
            <ul class="nav-links">
                <li>
                    <img
                        :src="
                            require('../../../../assets/imgs/dashboard/notofications.png')
                        "
                        alt="pic"
                    />
                </li>
                <li>
                    <img
                        :src="
                            require('../../../../assets/imgs/dashboard/activation-status.webp')
                        "
                        alt="pic"
                    />
                </li>
                <li>
                    <img
                        :src="
                            require('../../../../assets/imgs/dashboard/view-list.png')
                        "
                        alt="pic"
                    />
                </li>
                <li>
                    <img
                        :src="
                            require('../../../../assets/imgs/dashboard/filter.jpg')
                        "
                        alt=" pic"
                    />
                </li>
                <li @click="openAddUserForm()">
                    <img
                        :src="
                            require('../../../../assets/imgs/dashboard/add-users.jpg')
                        "
                        alt=" pic"
                    />
                </li>
                <li>
                    <img
                        :src="
                            require('../../../../assets/imgs/dashboard/user-img.png')
                        "
                        alt=" pic"
                    />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import AddUser from "../functions-in-nav/AddUser.vue";

export default {
    name: "HeaderSys",
    components: { AddUser },
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
            menuIcon: true,
            iClassOpen: "fa-solid fa-align-left",
            iClassClose: "fa-solid fa-align-right",
            pagesTitles: [
                {
                    headerImg: "students-icon.png",
                    pageName: "Students",
                },
                {
                    headerImg: "parents.png",
                    pageName: "Parents",
                },
                {
                    headerImg: "Employees.png",
                    pageName: "Employees",
                },
                {
                    headerImg: "owners.png",
                    pageName: "System Owners",
                },
                {
                    headerImg: "settings.png",
                    pageName: "General Settings",
                },
            ],
            indexTitle: 0,
            addUserForm: false,
        };
    },

    mounted() {
        document
            .querySelectorAll(".sidebar-ul-links li")
            .forEach((li, index) => {
                li.addEventListener("click", () => {
                    this.indexTitle = index;
                });
            });
    },
    methods: {
        changeIcon: function () {
            this.menuIcon = !this.menuIcon;
        },
        closeSidebar: function () {
            this.$emit("closeSidebar");
        },
        closeUserForm: function () {
            if (confirm("Are You sure you want to cancel") == true) {
                this.addUserForm = false;
            }
        },
        openAddUserForm: function () {
            this.addUserForm = true;
        },
    },
};
</script>

<style lang="scss">
ul li {
    display: inline;
    margin: 2px;
}
.add-user-li {
    display: inline;
}
</style>
