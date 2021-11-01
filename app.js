function Person(name1, password1)
{
    this.name = name1;
    this.password = password1;
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.getPass = function () {
    return this.password;
}

Person.prototype.getLevel = function () {
    return this.level;
}

Person.prototype.level = "admin";

function User(name1)
{
    this.name = name1;
}

User.prototype = new Person();

var person1 = new Person("ti", "1234");
var user1 = new Person("teo", "12345");

console.log(user1.getName());