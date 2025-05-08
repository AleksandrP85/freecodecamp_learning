//step 22

// rows[rows.length -1];



// step 24

// let cities = ["London","New York","Mumbai"];
// console.log(cities);
// cities[2] = 'Mexico City';
// //cities[cities.length-1] = 'Mexico Citi';
// console.log(cities);

// step 26
// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push('freeCodeCamp');
// console.log(rows);

// step 27
// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("freeCodeCamp");
// let popped = rows.pop();
// console.log(popped);

// step 28

// let pushed = rows.push("freeCodeCamp");
// console.log(pushed);

// step 32

// let pushed = rows.push("freeCodeCamp");
// console.log(pushed);

// step 36
// for (let i = 0; i < count; i = i + 1) {

// }

// step 37

// rows.push(i);

// step 39

// let result = "";
//Елка
// const character = "*";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i + 1))
// }

// let result = ""

// for (const row of rows) {
//   result = result + row + "\n";
// }

// console.log(result);

// step 46
// for (let i = 0; i < count; i = i + 1) {
//     rows.push(character.repeat(i + 1))
//   }

// step 47 

// function padRow(){

// } 



const character = "#";
const count = 8;
const rows = [];


function padRow(name) {
  const test = "Testing";
  
  return test;

}




const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/