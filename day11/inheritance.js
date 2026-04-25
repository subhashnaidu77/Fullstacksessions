class Parent{
constructor(name){
this.name= name;
}
session(){
return "hello"+this.name;
}
}
//child class
class Student extends Parent{
constructor(name,course){
super(name);//  to call the constructor of a parent class 
this.course = course;
}}
let s1 = new Student("subhash" ,"MERN");
console.log(s1.session());