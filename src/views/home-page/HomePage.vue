<template>
    <div class="home">
        <WelcomePage
            :imgName="imgName"
            :pageTitle="pageTitle"
            :SliderImgsNames="SliderImgsNames"
            :firstSection="firstSection"
            :secondSection="secondSection"
        />
    </div>
</template>

<script>
// @ is an alias to /src

import WelcomePage from "./WelcomePage.vue";

export default {
    name: "HomePage",
    components: {
        WelcomePage,
    },
    data() {
        return {
            imgName: "capping.png",
            pageTitle: "Welcome",
            SliderImgsNames: {
                sliderOne: "food03.png",
                sliderTwo: "juice.png",
                sliderThree: "Sausage-Clipart.png",
                sliderTitleOne: "Slider Name One",
                sliderTitleTwo: "Slider Name Two",
                sliderTitleThree: "Slider Name Three",
            },

            firstSection: {
                img: "store01.png",
                title: "Mission",
                description:
                    "Providing an appropriate educational learning environment that allows the learner to benefit from multiple and different types of learning resources, provides him with opportunities for self-learning, enhances his research and discovery skills, and enables the teacher to follow modern methods in designing, implementing and evaluating the lesson material.",
            },

            secondSection: {
                title: "vision",
                description:
                    "The center's vision is embodied in becoming a leading model in the development of education, in order to reach the ranks of leading centers globally, Leadership in developing academic performance and excellence in learning and teaching.",
                img: "store03.png",
            },
        };
    },
};
</script>
