<template>
    <div>
        <h1 class="text-center mt-0 text-bg-danger">OOP Ninja</h1>
    </div>
</template>

<script>
export default {
    name: "OopNinja",
    mounted() {
        class UserLoginData {
            constructor(user, userPassword) {
                this.user = user;
                this.userPassword = userPassword;
                this.score = 0;
            }
            login() {
                console.log(this.user, " Has Logged in");
                return this;
            }
            logout() {
                console.log(this.user, "Has Logged out");
                return this;
            }
            updateScore() {
                this.score++;
                console.log(this.user, "Score Now is : ", this.score);
                return this;
            }
        }
        var userOne = new UserLoginData("Magdy", "123456");
        var userTwo = new UserLoginData("Ali", "123456");
        var userThree = new UserLoginData("Mohamed", "123456");

        // methods Chain
        userOne.login().updateScore().updateScore().logout();
        userTwo.login().updateScore().updateScore().logout();

        var users = [userOne, userTwo, userThree];
        class Admin extends UserLoginData {
            deleteUser(user) {
                users = users.filter((u) => {
                    return u.user != user.user;
                });
            }
        }
        var admin = new Admin("Ezz", "123456");

        // This Function Is Only For =Admin= ,
        // -So If UserOne,UserTwo Or userThree Try To delete Any User He  Hasn't Access To:
        //  -Use This Function deleteUser() ,It is For Admin users Only ****
        admin.deleteUser(userThree);

        console.log(users);
    },
};
</script>
