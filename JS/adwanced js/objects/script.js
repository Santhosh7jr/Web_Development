let obj={
    name:"someone",
    age:"some age",
    occupation:"some occupation",
    salary:"some salary"
};

console.log(obj);

obj["age"]=20;

console.log(obj);

obj["name"]="santhosh";
obj["occupation"]="does nothing";
obj["salary"]="no salary";

console.log(obj);

obj["scores"]=[20,50,60,80,70,90];

console.log(obj);


function Database(name,age,occupation,salary,scores){
    this.name=name;
    this.age=age;
    this.occupation=occupation;
    this.salary=salary;
    this.scores=scores;
    this.doSomething=()=>{
        console.log("doing something");
    }
}

let obj1=new Database("santhosh",20,null,null,[98,74,85,61,35,64,54]);

console.log(obj1);
obj1.doSomething()