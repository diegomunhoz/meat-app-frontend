"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "diego@hotmail.com": new User('diego@hotmail.com', 'Diego', 'diego123'),
    "dani@hotmail.com": new User('dani@hotmail.com', 'Daniela', 'dani321')
};
