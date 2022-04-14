function summation(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}

const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];

function animalNames(array) {
  let displayNames = [];
  array.forEach(function (array) {
    displayNames.push(
      `name: ${array.animal_name}, scientific: ${array.scientific_name}`
    );
  });
  return displayNames;
}

animalNames(zooAnimals);

function lowerCaseNames(array) {
  const newArray = array.map(function (item) {
    return item.animal_name.toLowerCase();
  });
  return newArray;
}

function lowPopulationAnimals(array) {
  const newArray = array.filter(function (item) {
    return item.population < 5;
  });
  return newArray;
}

function USApop(array) {
  const singleValue = array.reduce(function (accumulator, item) {
    return accumulator + item.population;
  }, 0);
  return singleValue;
}

function consume(a, b, cb) {
  return cb(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greeting(a, b) {
  return `Hello ${a} ${b}, nice to meet you!`;
}

function CuboidMaker(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height;
}

CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function () {
  return (
    2 *
    (this.length * this.width +
      this.length * this.height +
      this.width * this.height)
  );
};

function Cuboid(attr) {
  CuboidMaker.call(this, attr);
}

Cuboid.prototype = Object.create(CuboidMaker.prototype);

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

console.log(`cuboid volume: ${cuboid.volume()}`); // 100
console.log(`cuboid surfaceArea: ${cuboid.surfaceArea()}`); // 130

class CuboidMakerTwo {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CuboidTwo extends CuboidMakerTwo {
  constructor(attr) {
    super(attr);
  }
}

const cuboidTwo = new CuboidTwo({
  length: 4,
  width: 5,
  height: 5,
});

console.log(`cuboidTwo volume: ${cuboidTwo.volume()}`); // 100
console.log(`cuboidTwo surfaceArea: ${cuboidTwo.surfaceArea()}`); // 130

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working");
  return "bar";
}
foo();
module.exports = {
  foo,
  summation,
  animalNames,
  lowerCaseNames,
  lowPopulationAnimals,
  USApop,
  consume,
  add,
  multiply,
  greeting,
  CuboidMaker,
  CuboidMakerTwo,
};
