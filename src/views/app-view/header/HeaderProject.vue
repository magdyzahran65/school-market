<template>
    <div class="header-project">
        <span class="logo-span"
            ><img
                class="logo-login"
                :src="require('@/assets/imgs/' + logoName)"
                alt=""
        /></span>
        <span class="header-project-name">{{ projectName }}</span>
    </div>
</template>

<script>
export default {
    name: "HeaderProject",
    props: {
        logoName: {
            type: String,
        },
        projectName: {
            type: String,
        },
    },
};
</script>
