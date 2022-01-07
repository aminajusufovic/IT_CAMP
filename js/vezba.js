// a = window.prompt("Unesite broj");
// if (a == 0) {
//   console.log("Uneti broj je jednak nuli");
// }
// if (a % 2 == 0) {
//   console.log("Uneti broj je paran");
// }
// if (a % 2 == 1) {
//   console.log("Uneti broj je neparan");
// }

// a = window.prompt("Unesite prvi broj");
// b = window.prompt("Unesite drugi broj");
// c = window.prompt("Unesite treci broj");
// let d = Math.max(a, b, c);
// console.log(d);

// a = window.prompt("Unesite prvi broj");
// b = window.prompt("Unesite drugi broj");
// c = window.prompt("Unesite treci broj");
// var brojevi = [a, b, c];
// brojevi.sort();
// console.log(brojevi);

// a = window.prompt("Unesite prvi broj");
// b = window.prompt("Unesite drugi broj");
// c = window.prompt("Unesite treci broj");
// if (a + b > c || a + c > b || b + c > a) {
//   console.log("moguce je napraviti trougao od unetih vrednosti");
// } else {
//   console.log("Nije moguce je napraviti trougao");
// }

// a = prompt("Unesite broj od 1 do 100");
// switch (a) {
//   case "1":
//     console.log("Broj je low");
//     break;
//   default:
//     console.log("Vas unos je pogresan pokusajte ponovo");}

// a = -5;
// b = -2;
// c = -6;
// d = 0;
// e = -1;
// if (a > b && a > c && a > d && a > e) {
//   console.log(a);
// }
// if (b > a && b > c && b > d && b > e) {
//   console.log(b);
// }
// if (c > b && c > a && c > d && c > e) {
//   console.log(c);
// }
// if (d > b && d > c && d > a && d > e) {
//   console.log(d);
// }
// if (e > b && e > c && e > a && e > a) {
//   console.log(e

// for (var i = 0; i <= 15; i++) {
//   if (i == 0) {
//     console.log(i, "Ovaj broj je jednak nuli");
//   } else if (i % 2 == 0) {
//     console.log(i, "Ovaj broj je paran");
//   } else {
//     console.log(i, "Ovaj broj je neparan");
//   }
// }

// var sum = 0;
// for (var x = 0; x < 1000; x++) {
//   if (x % 3 === 0 && x % 5 === 0) {
//     sum += x;
//   }
// }
// console.log(sum);

// for (var i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log(i, "buzz");
//   } else if (i % 3 === 0) {
//     console.log(i, "fizz");
//   } else {
//     console.log(i);
//   }
// }

// sum = 1;
// x = prompt("Unesi broj");
// for (let i = 1; i <= x; i++) {
//   sum *= i;
// }
// console.log(sum);

// br1 = 1;
// br2 = 1;
// sum = 0;
// console.log(br1);
// console.log(br1);
// for (let i = 0; i <= 8; i++) {
//   sum = br1 + br2;
//   br1 = br2;
//   br2 = sum;
//   console.log(sum);
// }

// i = 1;
// j = 1;
// var sum;
// for (let i = 1; i <= 6; i++) {
//   sum = "";
//   for (let j = 1; j < i; j++) {
//     sum += "*";
//   }
//   console.log(sum);}

// for (let i = 0; i <= 10; i++) {
//   var red = "";
//   for (let j = 1; j <= 10; j++) {
//     red += `${i * j}\t`;
//   }
//   console.log(red, "\n");
// }

// var pozTemp = 0;
// var negTemp = 0;

// var pozBr = 0;
// var negBr = 0;

// for (let i = 0; i < 10; i++) {
//   t = Number(prompt("Unesite temp:"));
//   if (t > 0) {
//     pozBr++;
//     poztemp += t;
//   } else {
//     negBr++;
//     negTemp += t;
//   }
// }
// console.log("Srednja pozitivna vrednost je", pozTemp / pozBr);
// console.log("Srednja pozitivna vrednost je", negTemp / negBr);

// rec = "ratar";
// if (rec[0] === rec[4] && rec[1] === rec[3]) {
//   console.log(" rec je palindrom");
// } else {
//   console.log("rec nije palindrom");
// }

// rec = "ratar";
// for (let i = 0; i < Marh.floor(rec.length / 2); i++) {
//   if (rec[i] !== rec[rec.length - 1 - i]) {
//     console.log("rec nije palindrom");
//     break;
//   }

//   if (i === Math.floor(rec.length / 2) - 1) {
//     console.log("rec je palindrom");
//   }
// }

// x = 5;
// y = 6;
// z = x + y;

// let x = 5;
// let y = 5;
// let z = 6;
// (x == y)
// (x == z)
