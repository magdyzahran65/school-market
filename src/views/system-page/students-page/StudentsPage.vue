<template>
    <div class="students">
        <!-- <LoadingAnimation v-show="pause" /> -->
        <StudentsTable :data="data" :tabs="tabs" :addUserForm="addUserForm" />
        <!-- <button @click="getAllUsers()">test get users</button> -->
    </div>
</template>

<script>
const headers = {
    userAuthorizeToken:
        "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",
    languageToken: "en-US",
};

import StudentsTable from "./student-components/StudentsTable.vue";
import axios from "axios";
// import LoadingAnimation from "@/views/login-form/login-page-components/LoadingAnimation.vue";

export default {
    name: "StudentsPage",
    components: {
        StudentsTable,
        // LoadingAnimation,
    },
    data() {
        return {
            tabs: ["Students", "Roles", "Login Code"],
            data: [],
            pause: true,
            addUserForm: true,
        };
    },
    mounted() {
        this.getAllUsers();
        console.log(this.data);
    },

    methods: {
        getAllUsers: async function () {
            await axios
                .get(
                    "api/Users/GetAllUsers?paginationStatus={{paginationStatus}}&pageSize={{pageSize}}&page={{page}}&activationTypeTokens=AST-17400&filterStatus={{filterStatus}}&textSearch=&establishmentToken=&creationDateTimeFrom=&creationDateTimeTo=&lastUpdateDateTimeFrom=&lastUpdateDateTimeTo=&createdByUserToken=&lastUpdatedByUserToken=&userToken=&establishmentRoleDataInclude=&userProfileDataInclude=true&userTypeToken=UTT_12800&userLocalJobToken=&userGenderToken=&userReligionToken=&userEducationalStageToken=&blackListOfProductToken=&whiteListOfProductToken=",
                    { headers }
                )
                .then((res) => {
                    this.data = res.data.usersData;
                    if (res) {
                        this.pause = false;
                    }

                    console.log(res);
                });
        },
    },
};
</script>

<style lang="scss">
.students {
    background: rgb(242, 242, 242);
    background: linear-gradient(
        45deg,
        rgba(242, 242, 242, 1) 50%,
        rgba(255, 231, 197, 1) 100%
    );
    width: 93%;
    margin: 35px auto;
    border-radius: 15px;
}
</style>
