import axios from "axios";

export function getData() {
    return this.$store.state.loginModal;
}
export let resp = 0;
export function fillForm() {
    this.$store.state.loginModal.user = this.user;
    this.$store.state.loginModal.userPassword = this.userPassword;
}
export const loginValidations = async function loginValidations() {
    this.$router.push("/dashboard/student");
    await axios
        .post("api/UsersAuthentication/UserLogin", this.$store.state.loginModal)
        .then((res) => {
            this.$store.state.status = res.data.status;

            if (res.data.status == 406) {
                resp = res.data.status;
                this.$store.state.loginMsg = res.data.msg;
                this.$store.state.status = res.data.status;
                this.pauseLoading(stop);

                // =========================
            } else if (res.data.status === 200) {
                // this.$store.state.loginMsg = res.data.msg;
                // this.$router.push("/dashboard/student");
                // =========================
            } else if (res.status == 420) {
                // this.ERR_NETWORK = "Check Your Network Connection";
                this.$router.push("/rout");
            }
        })

        .catch((error) => {
            console.error(error);
        });
};

export default {
    loginValidations,
    getData,
    fillForm,
    stop,
};
