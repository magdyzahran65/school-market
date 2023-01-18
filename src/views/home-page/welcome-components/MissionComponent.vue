<template>
    <section class="slider">
        <div class="slider-img">
            <img
                :src="require('../../../assets/imgs/' + firstSection.img)"
                alt=""
            />
            <div class="mission">
                <h1>{{ firstSection.title }}</h1>
                <p>
                    {{ firstSection.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MissionComponent",
    props: {
        firstSection: {
            type: Object,
        },
    },
};
</script>
