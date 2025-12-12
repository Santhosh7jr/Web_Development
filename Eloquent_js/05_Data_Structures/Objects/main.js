// Objects
/*let day1 = {
    squirrel : false,
    events : ["work", "touched a tree", "ate pizza"]
}

console.log(day1,"\n");
console.log(day1.squirrel,"\n");
console.log(day1.events,"\n");
console.log(day1.wolf,"\n");
day1.wolf = true;
console.log(day1.wolf,"\n");
console.log(day1,"\n");*/


/*let anObject = {
    left : true,
    right : true
}

console.log(anObject);
console.log(Object.keys(anObject));
console.log(anObject.left, "\n");

delete anObject.left;

console.log(anObject.left);
console.log(anObject);
console.log("left" in anObject);
console.log("right" in anObject, "\n");

object1 = {};
Object.assign(object1, anObject);
console.log(object1, "\n");*/


/*let journal = [
    {events : ["work", "pizza"], squirrel : false},
    {events : ["work", "pizza", "cycling"], squirrel : false},
    {events : ["work", "pizza", "peanuts"], squirrel : true}
];

console.log(journal);*/


// Immutability
/*let object1 = {value : 15};
let object2 = object1;
let object3 = {value : 15};

console.log(object1 == object2);
console.log(object1 === object2);
console.log(object1 == object3, "\n");

object1.value = 10;
console.log(object1.value);
console.log(object2.value);
console.log(object3.value);*/

/*const obj = {visitors : 0};
console.log(obj);
obj.visitors = 10;
console.log(obj);

obj = {visitors : 10}; //this isn't possible. will throw an error*/


/*let journal = [];

const addEntry = (events, squirrel) => {
    journal.push({events, squirrel});
};

addEntry(["work", "pizza", "cycling", "television"], false);
addEntry(["work", "pizza", "peanuts", "running", "touched tree", "ice cream"], true);
addEntry(["work", "touched tree", "beer", "pizza", "brushed teeth"], false);
// console.log(journal);


// Array Loops
let i = 1;
for (let entry of journal) {
    console.log(`Event${i++}: `,entry.events);
}

let events = [];
for (let entry of journal) {
    for (let event of entry.events) {
        if (! events.includes(event)){
            events.push(event);
        }
    }
}

console.log(events);*/


/*let coOrdinates = {a : 5, y : 0};
console.log({...coOrdinates, y : 10, z : 1});*/


//Math Object
// console.log(Math.round((Math.random() * 10)))


//Destructuring
/*let {name} = {name : "guru", age : 20};
console.log(name);*/


// Optional property access 
/*function city(object) {
    return object?.location?.city;
}

console.log(city({location : {city : "toronto"}}));*/


//JSON
let obj = {
    name : "guru", 
    age : 20,
    degrees : ["diploma"," B.E"]
}

console.log(obj);
console.log(typeof obj);
console.log(JSON.stringify(obj));
console.log(typeof JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));
console.log(typeof JSON.parse(JSON.stringify(obj)));