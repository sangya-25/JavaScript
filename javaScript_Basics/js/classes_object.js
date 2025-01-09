//Prototypes in JS: (object's property which itself is a object)
//A js 'object' is an entity having state(properties) and behaviour(methods).
//it has a special property called prototype (every object has a inbuilt prototype)
//creating objects directly: (containing states(variables), behaviour(methods))
const student={
    full_name:"sangya ojha",
    marks:98.2,
    printMarks: function(){
        console.log(this.marks); //where 'this' stands for object name here student.marks
    },
    address:'Swami Vivekanand Enclave'
}
console.log(student.full_name); 
student.printMarks();   //using obj name we can call the object function
console.log(student);
//prototype contains inbuilt methods which can be used by an object
console.log(student.toString());  //prototype property(toString())
//to set a prototype we use __proto__ using which we can the fuctions of one obj into another
const Rahul={
    class:'CSE',
    blood_grp:'O+',
    enroll:'352',
    printMarks: function(){
        console.log('marks is:',78);
    }
}
Rahul.__proto__=student;  //that Rahul object can use the func of obj Student
Rahul.printMarks();
//if an object and prototype(object) have same methods then object methods are used
//prototype is reference to an object

//Another way to create an object is through "CLASSES": it is a program code template for craeting objects
//those object created through class will have same state(variables) and behaviour as of class inside it
class Car{   //class=car
    constructor(type,price){
        console.log('This is a constructor!');  //it need not be called explicitely rather whenever an object is created it will get invoke
        this.car_type=type;
        this.price_car=price
        console.log('Car is:',this.car_type);
        console.log(`car price: ${this.price_car}`);
    }
    //a class can only one constructor in javascript
    Start(){
        console.log('Start!');
        this.stop();
    }
    stop(){
        console.log('stop!');
    }
    setBrand(brand){
        this.car_brand=brand;
        console.log('Car Brand: ',this.car_brand);
    }
    setColor(color){
        this.col=color;
        console.log('Car color: ',this.col);
    }
}
let car1=new Car('fully Automatic!','25 Lakh');  //to create an object of the class which will invoke constructor
car1.Start();
car1.setBrand('Skoda');
car1.setColor('Black');
//constructor() is a reserved keyword in js which is a special method of a class which gets invoked automatically by new(keyword)i.e during object is created
//it is use to initialize an object:

//Inheritance: inheritance is passing down properties and methods from parent class to child class using 'extend' keyword
class flower{
    constructor(msg){
        this.message=msg;
        console.log(this.message);
    }
    fl_name(name){
        this.flower_name=name;
        console.log('Flower name: ',this.flower_name);
    }
    color(col){
        this.flower_color=col;
        console.log('Flower color:',this.flower_color);
    }
}
class lotus extends flower{   //here lotus class is child of the class flower
    //color method need not to repeat in this class since it is already inherited from the parent class(flower)
    constructor(){
        super('This is class: Flower'); //this will first invoke the parent class constructor
        super.fl_name('Lotus');   //to call the parent class function in child class using super()
        console.log('this is class: "lotus"');
    }
    count_petal(num){
        this.patels=num;
        console.log('Total Patels: ',this.patels);
    }
    identity(char){
        this.iden=char;
        console.log('Lotus identity: ',this.iden);
    }
}
let lot=new lotus();
lot.color('pink');  //uses the function of parent class through child(derived) class object
lot.count_petal(12);
//if parent and child class have same method the childs class method will be used
//super keyword: used to call the constructor of its parent class to access the parent's class properties and methods in child class.
let data= 'This is website data which contains all the content of the webiste';
class user{
    constructor(name,email){
        console.log('name:',this.name_is=name);
        console.log('email:',this.email_is=email);
    }
    viewData(){
        console.log(data);
    }
}
let obj=new user('sangya ojha','ojha.sangya@gmail.com');
let obj2=new user('Kunal sharma','sharma.kunal02@gmail.com');
obj.viewData();
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    edit(){
        data='new data is replaced!';
    }
}
let new_obj=new Admin('karan','gupta.karan@gmail.com');
new_obj.edit();
console.log(data);   //data is changed through child class method

//error handling: to check for any error in the code in some block and if any occur then handling it in another block
let a=15;
let b=15;
let x=(a-b);  //x=0;
//let res=a/x; which will be zero divisor error
//it is use to handle exceptions within the code so that the code functionality will get interupt
try{
    if(x===0){
        throw x; 
    }
    else{
        let res=a/x;
        console.log(`answer is: ${res}`);
    }
}catch(x){
    console.log('zero divisor error!');
}
