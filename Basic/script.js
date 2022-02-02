// car 1

let car = {
    carName: "Renault",
    modelCar: "DeZir",
    type: "coupe",
    weight: 830,
    color: ["red", "black", "silver"],
    year: 2010,
    fullName: function(){
        return `New ${this.carName} with model ${this.modelCar} is ${this.type} type with ${this.weight}kg weight with the ${this.color} colors from ${this.year}.`;
    }
}

console.log(car)
console.table(car)
document.getElementById("car").innerHTML = car.fullName();

// car 2

let car2 = {
    carName: "Volkswagen",
    modelCar: "Polo",
    type: "hatchback",
    weight: 900,
    color: ["silver", "black", "red"],
    year: 2017,
    fullName: function(){
        return `New ${this.carName} with model ${this.modelCar} is ${this.type} type with ${this.weight}kg weight with the ${this.color} colors from ${this.year}.`;
    }
}

console.log(car2)
console.table(car2)
document.getElementById("car2").innerHTML = car2.fullName();

// car 3

let car3 = {
    carName: "Mercedes",
    modelCar: "SLK 55 AMG",
    type: "coupe-cabrio",
    weight: 700,
    color: ["silver", "black"],
    year: 2019,
    fullName: function(){
        return `New ${this.carName} with model ${this.modelCar} is ${this.type} type with ${this.weight}kg weight with the ${this.color} colors from ${this.year}.`;
    }
}

console.log(car3)
console.table(car3)
document.getElementById("car3").innerHTML = car3.fullName();

// animal 1

let animal = {
    animalName: "cow",
    familyName: "mammals",
    age: 20,
    weight: 900,
    color: ["black", "white"],
    fullName: function(){
        return `This ${this.animalName} is from the family of ${this.familyName} with ${this.weight}kg and the most popular color what it has is ${this.color[0]} or ${this.color[1]} and lives about ${this.age} years.`;
    }
}

console.log(animal)
console.table(animal)
document.getElementById("animal1").innerHTML = animal.fullName();

// animal 2

let animal2 = {
    animalName: "frog",
    familyName: "reptile",
    age: 10,
    weight: 1,
    color: ["green", "black", "another"],
    fullName: function(){
        return `This ${this.animalName} is from the family of ${this.familyName} with ${this.weight}kg and the most popular color what it has is ${this.color[0]}, ${this.color[1]} or ${this.color[2]} and lives about ${this.age} years.`;
    }
}

console.log(animal2)
console.table(animal2)
document.getElementById("animal2").innerHTML = animal2.fullName();

// animal 3

let animal3 = {
    animalName: "fish",
    familyName: "vertebrate",
    age: [2, 60],
    weight: 20,
    color: "many different",
    fullName: function(){
        return `This ${this.animalName} is from the family of ${this.familyName} with ${this.weight}kg and has ${this.color} color and lives about from ${this.age[0]} to ${this.age[1]} years.`;
    }
}

console.log(animal3)
console.table(animal3)
document.getElementById("animal3").innerHTML = animal3.fullName();

// person 1

let person1 = {
        firstName: "john",
        lastName: "doe",
        age: 25,
        drivingLicense : true,
        hobbies: ['swim', 'read', 'coding'],
        fullName: function(){
            return `Mr. ${this.firstName} ${this.lastName} is ${this.age} years old and his hobbies are ${this.hobbies}.`;
        }
}

console.log(person1)
console.table(person1)
document.getElementById("person1").innerHTML = person1.fullName();

///
