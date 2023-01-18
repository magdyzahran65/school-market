<template>
    <nav class="login-nav">
        <ul class="login-links">
            <li class="login-text">
                <router-link to="/login"
                    ><i :class="loginIcon"> {{ loginWord }}</i></router-link
                >
            </li>
            <li>
                <a href=""
                    ><img :src="require('@/assets/imgs/' + langImgName)" alt=""
                /></a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "HeaderNavLogin",
    props: {
        langImgName: {
            type: String,
        },
        loginIcon: {
            type: String,
        },
        loginWord: {
            type: String,
        },
    },
};
</script>
