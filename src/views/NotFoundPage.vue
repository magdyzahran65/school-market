<template>
    <div class="not-found-page">
        <h1 class="not-found-title">Page Is Not Found !!</h1>
        <p class="not-found-msg">
            <span class="oops">Oops,</span> We couldn't find that page. Try
            going
            <router-link to="/">Home</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: "NotFoundPage",
};
</script>
