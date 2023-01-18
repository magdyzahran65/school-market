<template>
    <div class="students-table">
        <ul class="students-page-ul">
            <li @click="getData()" class="students-tab tab">
                <router-link to="student"> {{ tabs[0] }}</router-link>
            </li>
            <li class="roles-tab tab">
                <router-link to="/dashboard">{{ tabs[1] }}</router-link>
            </li>
            <li class="login-code tab">
                <router-link to="/dashboard"> {{ tabs[2] }} </router-link>
            </li>
        </ul>

        <table class="students-table">
            <th>#</th>
            <th>Image</th>
            <th>Code</th>
            <th>Name</th>
            <th>Phone Number</th>

            <tbody v-for="(item, i) in data" :key="i">
                <tr>
                    <!-- <td>{{ item.id }}</td> -->
                    <td class="td-id">{{ item.dailyCode }}</td>
                    <td class="td-img">
                        <img
                            :src="baseURL + item.userImagePath"
                            alt="User Image"
                        />
                    </td>
                    <td class="td-code">{{ item.fullCode }}</td>
                    <td class="td-name">{{ item.userNameCurrent }}</td>
                    <td v-if="item.userPhone == ''" class="td-phone">
                        Not Found
                    </td>
                    <td v-else-if="item.userPhone !== ''" class="td-phone">
                        {{ item.userPhone }}
                    </td>
                    <!-- <td>{{ item.address.street }}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import axios from "axios";

export default {
    name: "StudentsTable",
    props: {
        tabs: {
            type: Array,
        },
        data: {
            type: Array,
        },
    },
    methods: {
        // getData: () => {
        //     axios.get("api/Users/GetAllUsers").then((res) => {
        //         console.log(res);
        //     });
        // },
        // bassUrl: function (url) {},
    },
    data() {
        return {
            baseURL: "https://api-mss-dev.arcplangroup.com",
            userImage: "",
        };
    },
};
</script>

<style lang="scss">
.students-page-ul {
    /* width: 100%; */
    margin-top: 25px;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 75px;
    justify-content: center;
    align-items: center;
}

.students-tab,
.roles-tab,
.login-code {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 1px solid gray;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    max-height: 60px;
    overflow: hidden;
}
.students-tab:hover a,
.roles-tab:hover a,
.login-code:hover a {
    color: white !important;
}
ul .tab:hover {
    background-color: var(--main-color);
    color: #fff !important;
}
.router-link-active {
    padding: 5px;
    width: 30%;
    font-size: 20px;

    color: var(--second-text-color) !important;
}
.router-link-active:hover {
    color: #fff !important;
}

.students-tab .router-link-exact-active {
    padding: 5px;
    // background-color: var(--main-color) !important;
    color: var(--main-color) !important;
}
// =========================
table {
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px double gray;

    th {
        border-bottom: 3px solid gray;
        text-align: start;
        width: fit-content;
        color: rgb(70, 124, 125);
    }
    tr {
        border-bottom: 1px solid;
    }
    tr:hover {
        background-color: #ddd;
        color: rgb(70, 124, 125);
    }

    td {
        text-align: start;
        padding: 5px;
        height: 60px;
    }
    .td-img img {
        width: 25px;
        height: 25px;
        border: 1px solid gray;
        border-radius: 50%;
    }
}
</style>
