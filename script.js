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
console.log(person.age)

console.log(person.greet())

