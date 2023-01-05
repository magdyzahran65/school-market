<template>
    <div class="container mb-3 border-success border border-1 rounded-3 mt-4">
        <h1 class="text-center m-5 text-success text-decoration-underline">
            VueX Play List Mohamed Essa
        </h1>
        <div>
            <h2 class="text-primary text-center">Data</h2>
            <h4 class="text-center" v-for="(student, i) in students" :key="i">
                {{ student.name }} {{ student.age }}
                {{ student.Department }}
                {{ student.salary }}
                <br />
                <span>-----------------</span>
            </h4>
        </div>

        <div class="d-flex justify-content-center">
            <button @click="addToSalary" class="btn btn-success m-4">
                Add To Salary
            </button>

            <button @click="subFromSalary()" class="btn btn-warning m-4">
                Sub From Salary
            </button>

            <hr />
        </div>

        <!-- ====================== -->
        <h2 class="text-primary text-center">Getters Store Info</h2>
        <h3
            class="text-center"
            v-for="(modifiedInfo, key) in modifiedInfos"
            :key="key"
        >
            {{ modifiedInfo.name }} <br />
            {{ modifiedInfo.age }} <br />
            {{ modifiedInfo.Department }}
            {{ modifiedInfo.salary }}
            <br />
            <span>-----------------</span>
        </h3>
        <br />
        <hr />

        <!-- Api Functions -->

        <div class="d-flex justify-content-center">
            <button @click="get()" class="btn btn-success m-4">Get</button>
            <button @click="post()" class="btn btn-primary m-4">Post</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "VuexPlayList",
    data() {
        return {};
    },
    computed: {
        students() {
            return this.$store.state.names;
        },
        modifiedInfos() {
            return this.$store.getters.modifiedInfo;
        },
    },
    methods: {
        addToSalary() {
            // ***** this is/  =commit= function from =$store Mutations= *****
            console.log("Ok");
            this.$store.commit("increasesSalary");
        },
        subFromSalary() {
            console.log("Waite");
            // this.$store.commit("minus");
            this.$store.dispatch("minusSalary");
        },
        // ====================
        // Api functions
        // =====================
        // GET REQUEST
        get: function () {
            axios
                .get(
                    "https://api-mss-dev.arcplangroup.com/api/Users/GetAllUsers"
                )
                .then((res) => console.log(res.status))
                .catch((err) => console.error(err));
        },
        // POST REQUEST
        post: function () {
            axios
                .post(
                    "https://api-mss-dev.arcplangroup.com/api/UsersAuthentication/UserLogin",
                    {
                        title: "New Todo",
                        completed: false,
                    }
                )
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        },
    },
    // ==============
};
</script>
