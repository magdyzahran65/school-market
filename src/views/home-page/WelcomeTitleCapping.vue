<template>
    <div class="cap">
        <img
            class="capping-page-title"
            :src="require('../../assets/imgs/' + imgName)"
            alt=""
        />
        <h1 class="page-h1">{{ pageTitle }}</h1>
    </div>
</template>

<script>
export default {
    name: "WelComeTitleCapping",
    props: {
        imgName: {
            type: String,
        },
        pageTitle: {
            type: String,
        },
    },
};
</script>
