<template>
    <div class="res">
        <h1 class="text-center mt-0 text-bg-danger">Axios Course</h1>

        <div class="container w-100">
            <button @click="get()" class="btn btn-primary m-1 mt-3">Get</button>
            <button @click="post()" class="btn btn-success m-1 mt-3">
                Post
            </button>
            <button @click="update" class="btn btn-warning m-1 mt-3">
                Put/Patch
            </button>
            <button @click="remove()" class="btn btn-danger m-1 mt-3">
                Delete
            </button>
            <button @click="getAll()" class="btn btn-secondary m-1 mt-3">
                Slim Request
            </button>
            <button class="btn btn-secondary m-1 mt-3">Custom Headers</button>
            <button class="btn btn-secondary m-1 mt-3">Transform</button>
            <button class="btn btn-secondary m-1 mt-3">Error Handling</button>
            <button class="btn btn-secondary m-1 mt-3">Cancel</button>
        </div>
        <div class="container">
            <h1>status : {{ status }}</h1>
            <p>{{ msg }}</p>
            <!-- <p v-for="(title, i) in titles" :key="i" class="mt-3">
                {{ [title] }}
            </p> -->
        </div>
    </div>
</template>

<script>
// variables
const getRequest = "https://jsonplaceholder.typicode.com/todos";
const postRequest = "https://jsonplaceholder.typicode.com/todos";
const updateRequest = "https://jsonplaceholder.typicode.com/todos/1";
const deleteRequest = "https://jsonplaceholder.typicode.com/todos/1";

// =============

import axios from "axios";

export default {
    name: "AxiosCourse",

    methods: {
        showOutPut: function (res) {
            this.status = res["status"];
            if (this.status === 200) {
                this.msg = "Connection Success";
            }
        },
        get: function () {
            axios
                .get(getRequest)
                .then((res) => {
                    return this.showOutPut(res), console.log(res);
                })
                .catch(() => (this.status = "Try Again Or Check Url"));
        },
        post: function () {
            axios
                .post(postRequest)
                .then((res) => ((this.status = res.status), console.log(res)))
                .catch((err) => console.log(err));
        },
        update: function () {
            axios
                .patch(updateRequest, {
                    title: "Updated Todo",
                    completed: true,
                })
                .then((res) => console.log(res), console.log("updateRequest"))
                .catch((err) => console.log(err));
        },
        remove: function () {
            axios
                .delete(deleteRequest)
                .then((res) => console.log(res), console.log("Delete Request"))
                .catch((err) => console.log(err));
        },

        // get more than one Request as an Array in one Request function
        //  axios.all() || then(axios.spread)
        getAll: function () {
            axios
                .all([
                    axios.get(getRequest),
                    axios.get("https://jsonplaceholder.typicode.com/posts"),
                ])
                .then(axios.spread((res1, res2) => console.log(res1, res2)))
                .catch((err) => console.log(err));
        },
    },
    data() {
        return {
            status: "",
            msg: "",
            titles: null,
        };
    },
};
</script>
