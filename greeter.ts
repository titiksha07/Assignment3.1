class Greeter{
 message:string;
 constructor(msg:string){
this.message=msg;
 }
greet():string{
return "Hi" + this.message;

}
 }   
let greeter = new Greeter("Welcome to Acadgild");
greeter.greet;