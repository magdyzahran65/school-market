// import axios from "axios";

const allUsers = "https://api-mss-dev.arcplangroup.com/api/Users/GetAllUsers";
const userLogin =
    "https://api-mss-dev.arcplangroup.com/api/UsersAuthentication/UserLogin";
const addLoginUser =
    "https://api-mss-dev.arcplangroup.com/api/UserLoginCodes/AddUserLoginCode";
const updateLoginUser =
    "https://api-mss-dev.arcplangroup.com/api/UserLoginCodes/UpdateUserLoginCode";
const deleteLoginUser = "/api/UserLoginCodes/DeleteUserLoginCode";

export default {
    allUsers,
    userLogin,
    addLoginUser,
    updateLoginUser,
    deleteLoginUser,
};
