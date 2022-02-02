let array = [];

// let array jest ważne bo do tego kodu możemy wysłać wszystkie obiekty które chcemy opublikować na stronie za pomocą class 

class Animal {
    animalName;
    familyName;
    age;
    weight;
    color;
    img;

    constructor (animalName, familyName, age, weight, color, img){
        this.animalName = animalName;
        this.familyName = familyName;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.img = img;

        array.push(this);
        console.table(this);
    }
    info() {
        return `<div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" width="200px" alt="animal">
        <div class="card-body">
          <h5 class="card-title">${this.animalName}</h5>
          <p class="h6">${this.familyName}</p>
          <p class="card-text">Weight:${this.weight}kg</p>
          <p class="card-text">Color:${this.color}</p>
          <p class="card-text">Age:${this.age}</p>
          <a href="#" class="btn btn-primary">Read for more...</a>
          </div>
        </div>
      </div>`
    }
}

//każde obiekty mogę komentować jezeli nie wysyłam ich bezpośrednio do push array... wtedy kazdy obiekt wypisuje osobno... jak niżej

// let animal1 = new Animal("Cow", "Mammals", 20, 900, "black and white", "https://cdn.pixabay.com/photo/2013/12/28/19/28/cow-234835__340.jpg");

// console.table(animal1);
// let animal2 = new Animal("Frog", "Reitles", 10, 1, "green", "https://cdn.pixabay.com/photo/2012/12/13/18/50/frog-69813__340.jpg");
// console.table(animal2);
// let animal3 = new Animal("Fish", "Vertebrate", 10, 60, "black and white", "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__480.jpg");
// console.table(animal3);

// jak wysyłam do push array to nie musze nazywać każdego obiekty inaczej, wystarczy np new animal

new Animal("Cow", "Mammals", 20, 900, "black and white", "https://cdn.pixabay.com/photo/2013/12/28/19/28/cow-234835__340.jpg");
new Animal("Frog", "Reitles", 10, 1, "green", "https://cdn.pixabay.com/photo/2012/12/13/18/50/frog-69813__340.jpg");
new Animal("Fish", "Vertebrate", 10, 60, "black and white", "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__480.jpg");


// document.getElementById("result").innerHTML = animal1.info();

// let array = [animal1, animal2, animal3]; - tego używam jak wypisuje każdy obiekt osobno

for (let i = 0; i < array.length; i++) {
    document.getElementById("result").innerHTML += array[i].info();
}


// cars 

let array2 = [];

class Cars {
    carName;
    modelName;
    age;
    weight;
    color;
    img;

    constructor (carName, modelName, age, weight, color, img){
        this.carName = carName;
        this.modelName = modelName;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.img = img;

        array2.push(this);
        console.table(this);
    }
    info() {
        return `<div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" width="200px" alt="car">
        <div class="card-body">
          <h5 class="card-title">${this.carName}</h5>
          <p class="h6">${this.modelName}</p>
          <p class="card-text">Weight:${this.weight}kg</p>
          <p class="card-text">Color:${this.color}</p>
          <p class="card-text">Year:${this.age}</p>
          <a href="#" class="btn btn-primary">Read for more...</a>
          </div>
        </div>
      </div>`
    }
}

new Cars("Renauld", "DeZir",  2010, 900, "gray-metalic", "https://cdn.pixabay.com/photo/2018/05/13/04/10/lighthouse-3395306__340.jpg");
new Cars("Volkswagen", "Polo",  2017, 875, "gray-metalic", "https://cdn.pixabay.com/photo/2020/10/20/19/01/car-5671331__340.jpg");
new Cars("Mercedes", "SLK 55 AMG",  2013, 720, "white", "https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465__340.jpg");

for (let i = 0; i < array.length; i++) {
    document.getElementById("result2").innerHTML += array2[i].info();
}

// person

let array3 = [];

class Person {
    firstName;
    surName;
    age;
    weight;
    color;
    img;

    constructor (firstName, surName, age, weight, color, img){
        this.firstName = firstName;
        this.surName = surName;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.img = img;

        array3.push(this);
        console.table(this);
    }
    info() {
        return `<div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" width="200px" alt="person">
        <div class="card-body">
          <h5 class="card-title">${this.firstName}</h5>
          <p class="h6">${this.surName}</p>
          <p class="card-text">Weight:${this.weight}kg</p>
          <p class="card-text">Nationality:${this.color}</p>
          <p class="card-text">Age:${this.age}</p>
          <a href="#" class="btn btn-primary">Read for more...</a>
          </div>
        </div>
      </div>`
    }
}

new Person("Anna", "Biffl",  23, 68, "Austria", "https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg");
new Person("Stefan", "Herzog",  37, 75, "Deutschland", "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg");
new Person("Christina", "Nebel",  26, 60, "Switzerland", "https://cdn.pixabay.com/photo/2017/06/02/14/11/girl-2366438__340.jpg");

for (let i = 0; i < array.length; i++) {
    document.getElementById("result3").innerHTML += array3[i].info();
}

///