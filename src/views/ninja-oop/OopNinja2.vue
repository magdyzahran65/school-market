<template>
    <div>
        <h1 class="text-center mt-0 text-bg-danger">OOP Ninja Part 2</h1>
        <p class="text-center text-decoration-underline">Consol Log</p>
    </div>
</template>

<script>
export default {
    name: "OopNinja2",

    mounted() {
        function User(email, name) {
            this.email = email;
            this.name = name;
            this.online = false;
        }
        var userOne = new User("magdy.zahran@mail.com", "Magdy");
        var userTwo = new User("ahmed@mail.com", "Ahmed");

        User.prototype.login = function login() {
            this.online = true;
            console.log(this.email, "Has logged in");
        };

        User.prototype.logout = function logout() {
            this.online = false;
            console.log(this.email, "Has logged out");
        };

        // =================================================================
        function Admin(...args) {
            this.roll = "Super admin";
            User.apply(this, args);
        }

        var adminOne = new Admin("ibraheem@mail.com", "Ibraheem");
        Admin.prototype.deleteUser = function () {
            users = users.filter((u) => {
                return u.email != u.email;
            });
        };
        Admin.prototype = Object.create(User.prototype);
        console.log(userOne, userTwo, adminOne);
        let users = [userOne, userTwo, adminOne];
        adminOne.deleteUser(users[1]);
        console.log(users);
    },
};
</script>
