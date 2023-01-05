<template>
    <div class="vision">
        <div class="vision-text">
            <h1>{{ secondSection.title }}</h1>
            <p>
                {{ secondSection.description }}
            </p>
        </div>
        <img
            :src="require('../../../assets/imgs/' + secondSection.img)"
            alt=""
        />
    </div>
</template>

<script>
export default {
    name: "VisionComponent",
    props: {
        secondSection: {
            type: Object,
        },
    },
};
</script>
