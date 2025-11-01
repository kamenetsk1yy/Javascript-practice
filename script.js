//1
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// const frutsNames = [];
// for (let item of fruts) {
//   frutsNames.push(item.name); // Более читаемо чем item["name"]
// }

// console.log(frutsNames);


//2
// let a = 0;
// for (; a <= 10; a += 2) {
//   console.log(a, "a");
// }


// 3
// let a = 0;
// while(a <= 10) {
//   console.log(a);
//   a += 2;
// }


// 4
// let summ = 0;

// while (true) {
//    let value = +prompt("Enter a number:");
//    if (!value || value == 100) break;
//    summ += !value;
// }
// console.log("Sum:", summ);


// 5
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// let summ = girls.reduce((sum, item) => sum + item.age, 0) / girls.length;
// console.log(Math.round(summ));