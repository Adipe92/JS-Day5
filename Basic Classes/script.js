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
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="animal">
        <div class="card-body">
          <h5 class="card-title">${this.animalName}</h5>
          <p class="h6">${this.familyName}</p>
          <p class="card-text">Weight:${this.weight}kg</p>
          <p class="card-text">Color:${this.color}</p>
          <p class="card-text">Age:${this.age}</p>
          <a href="#" class="btn btn-primary">Read for more...</a>
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