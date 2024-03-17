// Primitives: number, string, boolean
// More comples tpyes: arrays, objects
// Function type, parameters

// Primitives

let age: number; // Not 'N'umber

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string = "React - The Complete Guide";

// course = 12341;

let course2: string | number = "React - The Complete Guide";

course2 = 12341;

type Person = {
  name: string;
  age: number;
};

let person2: Person;

person2 = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people2: Person[];

// Function & types
// function type not recommended
function add(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
