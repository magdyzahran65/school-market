import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter, store);

const routes = [
    {
        path: "/",
        name: "home",
        // component: HomePage,
        component: () => import("@/views/home-page/HomePage.vue"),
    },
    {
        path: "/login",
        name: "login",
        // component: HomePage,
        component: () => import("@/views/login-form/LoginPage.vue"),
    },
    {
        path: "*",
        name: "NotFoundPage",
        // component: HomePage,
        component: () => import("@/views/NotFoundPage.vue"),
    },

    // ============================= Training Pages ===============================
    {
        path: "/vuex-pl",
        name: "vuex-pl",
        // component: HomePage,
        component: () =>
            import("@/views/system-page/vuex-axios/VuexPlayL.list.vue"),
    },
    {
        path: "/axios",
        name: "axios",
        // component: HomePage,
        component: () =>
            import("@/views/system-page/vuex-axios/AxiosCourse.vue"),
    },
    {
        path: "/oop",
        name: "oop",
        // component: HomePage,
        component: () => import("@/views/ninja-oop/OopNinja.vue"),
    },
    {
        path: "/oop2",
        name: "oop2",
        // component: HomePage,
        component: () => import("@/views/ninja-oop/OopNinja2.vue"),
    },
    // vue Router Training
    {
        path: "/rout",
        name: "rout",
        // component: HomePage,
        component: () => import("@/views/rout-training/RouterTraining.vue"),
    },
    {
        path: "/form-training",
        name: "FormTraining",
        // component: HomePage,
        component: () => import("@/views/ninja-oop/FormTraining.vue"),
    },
    // ============================== End Training =================================

    {
        path: "/dashboard",
        name: "dashboard",

        component: () =>
            import(
                /* webpackChunkName: "dashboard" */ "../views/system-page/SystemPage.vue"
            ),
        meta: { auth: true },
        // beforeEnter: (to, from, next) => {
        //     if (to.meta.auth) {
        //         next();
        //     }
        // },

        children: [
            {
                path: "/dashboard/student",
                name: "student",
                component: () =>
                    import(
                        "@/views/system-page/students-page/StudentsPage.vue"
                    ),
                meta: { auth: true },
            },
            {
                path: "/dashboard/parents",
                name: "Parents",
                component: () =>
                    import("@/views/system-page/parents-page/ParentsPage.vue"),
            },
            {
                path: "/dashboard/employees",
                name: "employees",
                component: () =>
                    import(
                        "@/views/system-page/employees-page/EmployeesPage.vue"
                    ),
            },
            {
                path: "/dashboard/owners",
                name: "owners",
                component: () =>
                    import(
                        "@/views/system-page/system-owners/SystemOwnersPage.vue"
                    ),
            },
            {
                path: "/dashboard/settings",
                name: "settings",
                component: () =>
                    import(
                        "@/views/system-page/settings-page/SettingsPage.vue"
                    ),
            },
        ],
        // beforeEnter: (to, from, next) => {
        //     if (from.path == "/login") {
        //         next(true);
        //         console.log("Welcome Back");
        //     } else {
        //         next("login");
        //         console.log("Please Login ");
        //     }
        // },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
// router.beforeEach((to, from, next) => {
//     if (to.meta.auth) {
//         if (store.state.status == 200) {
//             next();
//         } else {
//             // next({ name: "login" });
//             next();
//         }
//     } else {
//         next();
//     }
// });

export default router;
