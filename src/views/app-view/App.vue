<template>
    <div id="app">
        <div class="layout-container">
            <router-view />
            <!-- <AppFooter /> -->
        </div>
    </div>
</template>

<script>
// import AppFooter from "./footer/AppFooter.vue";

export default {
    name: "App",
    components: {
        // AppFooter,
    },
};
</script>

<style lang="scss">
// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }

// nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
// #app {
//     a {
//         text-decoration: none;
//         color: var(--second-color);

//         &.router-link-exact-active {
//             color: var(--main-color);
//         }
//         &.router-link-exact-active:hover {
//             color: var(--main-color);
//         }
//     }
//     a:hover {
//         color: var(--second-text-color);
//     }
// }
</style>
