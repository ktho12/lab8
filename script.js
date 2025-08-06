let person = {
    name: "Jane",
    age: 24,
    enrolled: true,
    courses: ["Algebra", " Journalism", " Psychology"],
    greet: function () {
        console.log("My name is " + this.name, ", I'm " + this.age, ", and I'm taking " + this.courses);
        return ("Student is enrolled: " + this.enrolled);
    }
};

console.log(person.name);
console.log(person.age);

console.log(person.greet());

let jsonString = '{"name": "Jane", "age": 24, "enrolled": true, "courses": ["Algebra", " Journalism", " Psychology"]}';
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);
console.log("My name is " + jsonObj.name, ", I'm " + jsonObj.age, "and I'm taking " + jsonObj.courses);

let { name, age, courses } = person;
console.log(name);
console.log(courses);

let scores = [56, 99, 74];
console.log(scores[0]);
console.log(scores[1]);

let [ one, two, three ] = scores;
console.log(one);
console.log(two);


let copiedStudent = { ...person, graduating: 2027 };
console.log(copiedStudent);

let oldCourses = person.courses;
let newCourses = ["Creative Writing", "Data Science", "Biology"];
let totalCourses = [ ...oldCourses, ...newCourses ];
console.log(totalCourses);
