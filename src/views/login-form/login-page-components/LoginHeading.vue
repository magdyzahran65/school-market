<template>
    <h1 class="login-heading">{{ loginHeading }}</h1>
</template>

<script>
export default {
    name: "LoginHeading",
    props: {
        loginHeading: {
            type: String,
        },
    },
};
</script>
