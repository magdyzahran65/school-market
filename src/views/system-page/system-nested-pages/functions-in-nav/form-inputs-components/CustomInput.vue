<template>
    <div class="custom-input">
        <!-- placeholder=" English name" -->

        <div class="add-name">
            <label :class="labelClass"
                >{{ inputProperties.labelText }}<i :class="labelIconClass"></i
            ></label>
            <input
                :id="inputId"
                :class="inputClass"
                :type="inputType"
                :name="inputName"
                :value="inputValue"
                :placeholder="inputPlaceholder"
                :title="inputTitle"
                :required="inputRequired"
                :autofocus="inputAutofocus"
                v-model="inputModel"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomInput",
    props: {},
    computed: {
        // inputAttributes() {
        //     return this.inputProperties = ;
        // },
    },
    data() {
        return {
            inputProperties: {
                labelText: "",
                labelIconClass: "",
                labelClass: "",
                inputId: "",
                inputClass: "",
                inputType: "",
                inputModel: "",
                inputName: "",
                inputValue: "",
                inputPlaceholder: "",
                inputTitle: "",
                inputRequired: false,
                inputAutofocus: false,
            },
        };
    },
};
</script>
