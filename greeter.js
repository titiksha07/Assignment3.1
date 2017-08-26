var Greeter = (function () {
    function Greeter(msg) {
        this.message = msg;
    }
    Greeter.prototype.greet = function () {
        return "Hi" + this.message;
    };
    return Greeter;
}());
var greeter = new Greeter("Welcome to Acadgild");
greeter.greet;
