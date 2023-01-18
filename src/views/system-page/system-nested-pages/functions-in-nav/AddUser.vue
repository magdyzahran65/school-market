<template>
    <div v-show="addUserForm" class="add-user-container">
        <!-- <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.css"
            integrity="sha512-gxWow8Mo6q6pLa1XH/CcH8JyiSDEtiwJV78E+D+QP0EVasFs8wKXq16G8CLD4CJ2SnonHr4Lm/yY2fSI2+cbmw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        /> -->
        <div class="add-user">
            <div class="input-name">
                <div class="add-user-header">
                    <button
                        @click="closeUserForm()"
                        class="btn border border-2 bg-danger text-white add-user-close"
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <h1 class="add-user-heading">
                        {{ inputsForm.addUserHeading }}
                    </h1>
                </div>
                <div class="add-user-body">
                    <!-- Form -->
                    <form @submit.prevent class="add-user-form">
                        <button
                            type="submit"
                            class="btn btn-success add-user-done"
                        >
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <!-- ====== en name ====== -->
                        <!-- placeholder=" English name" -->

                        <div class="add-name">
                            <label class="text-secondary d-inline"
                                ><i class="fa-regular fa-user"></i
                            ></label>
                            <input class="english-name" autofocus type="text" />
                        </div>
                        <!-- ====== ar name ======= -->
                        <!-- placeholder=" Arabic name" -->

                        <div class="add-name">
                            <label class="text-secondary d-inline"
                                ><i class="fa-regular fa-user"></i
                            ></label>
                            <input class="arabic-name" autofocus type="text" />
                        </div>
                        <!-- ====== undefined name ====== -->
                        <!-- placeholder=" undefined name" -->
                        <div class="add-name">
                            <label class="text-secondary d-inline"
                                ><i class="fa-regular fa-user"></i
                            ></label>
                            <input
                                class="undefined-name"
                                autofocus
                                type="text"
                            />
                        </div>
                        <!-- ====== user name ====== -->
                        <!-- placeholder=" User name" -->

                        <div class="add-name">
                            <label class="text-secondary d-inline"
                                ><i class="fa-regular fa-user"></i
                            ></label>
                            <input class="user-name" autofocus type="text" />
                        </div>
                        <!-- ====== Email ====== -->
                        <div class="add-name">
                            <label class="text-secondary d-inline"
                                ><i class="fa-solid fa-at"></i
                            ></label>
                            <input
                                class="user-email"
                                placeholder=" example@mail.com"
                                autofocus
                                type="email"
                            />
                        </div>
                        <!-- ====== password ====== -->
                        <div class="add-name">
                            <label class="text-secondary d-inline"
                                ><i class="fa-solid fa-key"></i
                            ></label>
                            <input
                                class="user-password"
                                autofocus
                                autocomplete
                                placeholder=" *************"
                                autofill
                                type="password"
                            />
                        </div>

                        <fieldset class="">
                            <!-- ====== country code + phone ====== -->
                            <div class="user-name-country">
                                <span class="text-secondary country-span"
                                    ><i class="fa-solid fa-mobile-screen"></i
                                ></span>
                                <VuePhoneNumberInput
                                    id="vue-phone"
                                    v-model="yourValue"
                                />
                            </div>
                            <!-- ====== notes ====== -->
                            <div class="text-notes">
                                <label class="text-secondary d-inline"
                                    ><i class="fa-regular fa-clipboard"></i
                                ></label>
                                <textarea
                                    class="notes"
                                    autofocus
                                    placeholder=" notes"
                                    autofill
                                    type="text"
                                />
                            </div>

                            <!-- ====== Select Establishment role  ====== -->
                            <div class="text-notes mt-2">
                                <label class="text-secondary d-inline"
                                    ><i class="fa-solid fa-gears"></i
                                ></label>
                                <select class="notes" name="">
                                    <option value="">Select...</option>
                                </select>
                            </div>
                            <div class="text-notes mt-2">
                                <label class="text-secondary d-inline"
                                    ><i class="fa-solid fa-venus-mars"></i
                                ></label>
                                <select class="notes" name="">
                                    <option>Gender...</option>
                                    <option value="">male</option>
                                    <option value="">female</option>
                                </select>
                            </div>
                            <!-- ======= religion ======== -->
                            <div class="text-notes mt-2">
                                <label class="text-secondary d-inline"
                                    ><i class="fa-solid fa-mosque"></i
                                ></label>
                                <select class="notes" name="">
                                    <option>religion...</option>
                                    <option value="">Muslim</option>
                                    <option value="">Christian</option>
                                    <option value="">Jewish</option>
                                </select>
                            </div>
                            <!-- ======= Education ======== -->
                            <div class="text-notes mt-2">
                                <label class="text-secondary d-inline"
                                    ><i class="fa-solid fa-building-columns"></i
                                ></label>
                                <select
                                    class="notes"
                                    name=""
                                    placeholder="Select Establishment role"
                                >
                                    <option>Education stage...</option>
                                    <option value="">B.S</option>
                                    <option value="">Master</option>
                                    <option value="">Pr</option>
                                </select>
                            </div>
                        </fieldset>
                        <!-- ====== Daily purchase ====== -->
                        <!-- placeholder=" Daily purchase limit" -->

                        <div class="add-amount">
                            <label class="text-secondary d-inline"
                                ><i class="fa-solid fa-calculator"></i
                            ></label>
                            <input
                                class="daily-purchase-limit"
                                autofocus
                                autofill
                                type="number"
                                min="0"
                            />
                        </div>
                        <!-- ====== Monthly purchase ====== -->
                        <!-- placeholder=" Monthly purchase limit" -->

                        <div class="add-amount">
                            <label class="text-secondary d-inline"
                                ><i class="fa-solid fa-basket-shopping"></i
                            ></label>
                            <input
                                class="monthly-purchase-limit"
                                autofocus
                                autofill
                                type="number"
                                min="0"
                            />
                        </div>
                        <div class="add-user-form-img">
                            <label
                                ><img
                                    class="add-user-input-img"
                                    src="../../../../assets/imgs/add-users.jpg"
                                    alt=""
                            /></label>
                            <input
                                class="img-input-file"
                                type="file"
                                placeholder="Chose Photo"
                            />
                        </div>

                        <div>
                            <button
                                @click="confirm()"
                                :type="restFields ? 'reset' : 'cancel'"
                                class="btn btn-warning reset-btn"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
// {

//     // import $ from "jquery";
//     // $(document).ready(function ($) {
//     //     $("#number").intlTelInput();
//     // });
// }
export default {
    name: "AddUser",
    components: { VuePhoneNumberInput },
    props: {
        addUserForm: {
            type: Boolean,
        },
    },
    data() {
        return {
            yourValue: "",
            restFields: false,
            inputsForm: {
                addUserHeading: "Add User",
            },
        };
    },
    mounted() {
        document.querySelector(".input-tel__label").innerHTML = null;
    },
    methods: {
        closeUserForm: function () {
            this.$emit("closeUserForm");
        },
        confirm: function () {
            if (confirm("Are You Sure You Want to rest all Fields ?") == true) {
                this.restFields = true;
            } else {
                this.restFields = false;
            }
        },
    },
};
</script>
