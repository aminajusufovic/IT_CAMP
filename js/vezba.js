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
// for (let i = 0; i < Math.floor(rec.length / 2); i++) {
//   if (rec[i] !== rec[rec.length - 1 - i]) {
//     console.log("rec nije palindrom");
//     break;
//   }

//   if (i === Math.floor(rec.length / 2) - 1) {
//     console.log("rec je palindrom");
//   }
// }

// let ans = 0;
// for (let i = 999; i >= 100; i--) {
//   for (let j = 999; j >= 100; j--) {
//     let num = i * j;
//     let s = String(num);
//     let rs = s.split("").reverse().join("");
//     if (s === rs) {
//       ans = Math.max(ans, num);
//     }
//   }
// }

// console.log(ans);

// lozinka = prompt("unesite lozinku");
// while (lozinka < 10) {
//   lozinka++;
//   if (lozinka == "tajno") {
//     console.log("lozinka je tacna");
//   }
//   break;
// }

// moja_lozinka = "sifra";
// kor_lozinka = prompt("unesite lozinku");

// while (moja_lozinka !== kor_lozinka) {
//   kor_lozinka = prompt("Pogresna lozinka pokusajte ponovo:");
// }
// alert("tacna lozinka");

// kor_unos = prompt("unesite broj u rasponu od 10-20");
// while (kor_unos <= 20 && kor_unos >= 10) {
//   console.log("cetitamo uneli ste broju rasponu", kor_unos);
// }

// x = prompt(
//   "izaberite jednu od racunskih operacija:    1. (+)    2. (-)    3. (*)    4. (/)     5. (Izlaz iz programa)"
// );
// rezultat = 0;
// while ("1" === x) {
//   i = Number(prompt("Unesite prvi broj:"));
//   j = Number(prompt("Unesite drugi broj :"));
//   rezultat = i + j;
//   console.log("Zbir ova dva broja je", rezultat);
//   break;
// }
// while ("2" === x) {
//   i = Number(prompt("Unesite prvi broj:"));
//   j = Number(prompt("Unesite drugi broj :"));
//   rezultat = i - j;
//   console.log("Razlika ova dva broja je:", rezultat);
//   break;
// }
// while ("3" === x) {
//   i = Number(prompt("Unesite prvi broj:"));
//   j = Number(prompt("Unesite drugi broj :"));
//   rezultat = i * j;
//   console.log("Proizvod ova dva broja je:", rezultat);
//   break;
// }
// while ("4" === x) {
//   i = Number(prompt("Unesite prvi broj:"));
//   j = Number(prompt("Unesite drugi broj :"));
//   rezultat = i / j;
//   console.log("Kolicnik ova dva broja je:", rezultat);
//   break;
// }
// while ("5" === x) {
//   break;
// }

// ucenici = [];
// brUc = Number(prompt("broj ucenika"));
// for (let i = 0; i < brUc; i++) {
//   visUc = Number(prompt("Visina ucenika"));
//   ucenici.push(visUc);
// }

// console.log(ucenici);

////////////////////////////////////////////////
// min = ucenici;
// max = ucenici;
// for (let i = 0; 0 < ucenici.length; i++) {
//     if(max< ucenici[i])
// }

// sum = 0;
// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i <= niz.length; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i <= niz.length; i++) {
//   niz[i] = niz[i] * 3;
// }

// console.log(niz[i]);

// const nizJedan = [];
// const nizDva = [1, 2, 3, 4, 5];
// console.log(nizJedan);
// console.log(nizDva);
// for (i = 0; i < nizDva.length; i++) {
//   nizJedan[i] = nizDva[i];
//   nizDva[i] = [];
// }
// console.log(nizJedan);
// console.log(nizDva);

// niz1 = [1, 2, 3, 4, 5];
// niz2 = [];
// console.log(niz1);
// console.log(niz2);
// for (let i = 0; i < niz1.length; i++) {
//   niz2.push(niz1[i]);
// }
// niz1 = [];

// niz1 = [1, 2, 3, 4, 5];
// niz2 = [];
// nizl = niz1.length;

// for (let i = 0; i < nizl; i++) {
//   el = niz1.pop();
//   niz2.unshift(el);
// }
// console.log(niz1);
// console.log(niz2);

// a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 21],
//   [7, 4, 28, 21],
//   [3, 10, 26, 7],
// ];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 21],
//   [7, 4, 28, 21],
//   [3, 10, 26, 7],
// ];
// for (let i = 0; i < a.length; i++) {
//   const row = a[i];
//   red = "";
//   for (let j = 0; j < row.length; j++) {
//     red += `${row[j]}[${i}]
//     } [${j}] \t`;
//   }
//   console.log(red);
// }

// a = [
//   [0, 2, 1, 24],
//   [8, 0, 9, 4],
//   [7, 0, 0, 27],
//   [7, 4, 28, 0],
// ];
// // for (let i = 0; i < a.length; i++) {
// //   console.log(a[i]);
// // }
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 21],
//   [7, 4, 28, 21],
//   [3, 10, 26, 7],
// ];
// for (let i = 0; i < a.length; i++) {
//   const row = a[i];
//   red = "";
//   for (let j = 0; j < row.length; j++) {
//     if (i + j === a.length - 1) {
//       a[i][j] = "\\";
//     }
//     red += `${row[j]}[${i}]
//     } [${j}] \t`;
//   }
//   console.log(red);
// }

// a = [
//   [8, 11, 9, 4],
//   [7, 0, 7, 21],
//   [7, 4, 28, 21],
//   [3, 10, 26, 7],
// ];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     if (i + j === a.length - 1) {
//       a[i][j] = "\\";
//     }
//   }
//   console.log(a[i]);
// }

// console.log(niz2.includes(niz1[0]));
// console.log(niz2.includes(niz1[1]));
// console.log(niz2.includes(niz1[2]));

// niz1 = [1, 2, 3];
// niz2 = [100, 2, 1, 10];
// niz3 = [];
// for (let i = 0; i < niz1.length; i++) {
//   if (!niz2.includes(niz1[i])) {
//     console.log("nalazi se", niz1[i]);
//     niz3.push(niz1[i]);
//   }
// }
// for (let i = 0; i < niz2.length; i++) {
//   if (!niz1.includes(niz2[i])) {
//     console.log("nalazi se", niz2[i]);
//     niz3.push(niz2[i]);
//   }
// }
// console.log(niz3);

// niz1 = [1, 2, 3];
// niz2 = [2, 30, 1];

// for (let i = 0; i < niz1.length; i++) {
//   if (!niz2.includes(niz1[i])) {
//     niz2.push(niz1[i]);
//   }
// }
// console.log(niz2);

// arr = ["b", 6, "a", "q", 7, 2];
// arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (Number(arr[i])) {
//     arr1.unshift(arr[i]);
//   } else if (String(arr[i])) {
//     arr1.push(arr[i]);
//   }
// }
// console.log(arr1);

// niz = [
//   ["a", 1, true],
//   ["b", 2, false],
// ];
// nizResenje = [[], [], []];
// for (let i = 0; i < niz.length; i++) {
//   for (let j = 0; j < niz[i].length; j++) {
//     console.log(niz[i]);
//     console.log(niz[i][j]);
//     if (typeof niz[i][j] === "string") {
//       nizResenje[0].push(niz[i][j]);
//     } else if (typeof niz[i][j] === "number") {
//       nizResenje[1].push(niz[i][j]);
//     } else if (typeof niz[i][j] === "boolean") {
//       nizResenje[2].push(niz[i][j]);
//     }
//   }
// }
// console.log(nizResenje);

// function capitaliseString() {
//   let fox = "the quick brown fox";
//   let foxarr = fox.split(" ");
//   console.log(fox);
//   console.log(foxarr);
//   for (i = 0; i < foxarr.length; i++) {
//     foxarr[0] = foxarr[0].toUpperCase();
//   }
//   let foxarr = fox.join("");
//   console.log(foxarr);
// }

// capitaliseString();

// unos = prompt("unesite vase ime");
// function ime(unos) {
//   console.log("Vase ime je", unos);
// }

// ime(unos);

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// function broj(niz) {
//   min1 = niz[0];
//   min2 = niz[0];
//   for (el of niz) {
//     if (min1 > el) {
//       min1 = el;
//     } else if (min2 > el && min1 < el) {
//       min2 = el;
//     }
//   }
//   console.log("Najmanji je", min1);
//   console.log("Drugi Najmanji je", min2);
// }
// broj([2, 3, 4, 7, 9]);

// function nbroj(arr) {
//   min1 = arr[0];
//   arr = arr;
//   for (el of arr) {
//     if (el > min1) {
//       min1 = el;
//     }
//   }
//   console.log("Najduzi broj je", min1);
// }

// nbroj([1, 21, 223, -5343]);

// function nbroj(arr) {
//   min1 = arr[0];
//   for (el of arr) {
//     if (Math.abs(min1) <= Math.abs(el)) {
//       min1 = el;
//     }
//   }
//   console.log("Najduzi broj je", min1);
// }

// nbroj([1, 21, 223, -5343]);

// nule([3, 0, 24, 54, 0, 123, 0, 32, 63]);

// function prosek(niz) {
//   sum = 0;
//   for (el of niz) {
//     sum += el;
//   }
//   console.log("prosek je", sum / niz.length);
// }

// prosek([3, 24, 54, 123, 32, 63]);

// function poweroftwo(n) {
//   pomArr = [];
//   for (let i = 0; i <= n; i++) {
//     pomArr.push(2 ** i);
//   }
//   return pomArr;
// }

// rez = poweroftwo(3);
// console.log(rez);

// function reverseSeq(n) {
//   niz = [];
//   for (let i = n; i > 0; i--) {
//     niz.push(i);
//   }
//   return niz;
// }

// rez = reverseSeq(5);
// console.log(rez);

// function pillars(numpill, dist, width) {
//   for (let i = 1; i < numpill; i++) {
//     dist = dist + width;
//     re = dist - 2 * width;
//   }
//   return dist;
// }

// rez = pillars(2, 20, 25);
// console.log(pillars(2, 20, 25));

// function pillars(numpill, dist, width) {
//   for (let i = 1; i < numpill; i++) {
//     dist = dist + width;
//     re = dist - 2 * width;
//   }
//   return dist;
// }

// rez = pillars(2, 20, 25);
// console.log(pillars(2, 20, 25));

// function symmetricPoint(p, q) {
//   return [2 * q[0] - p[0], 2 * q[1] - p[1]];
// }

// const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);

// function stray(niz) {
//   min1 = niz[0];
//   for (el of niz) {
//     if (el !== min1) {
//       min1 = el;
//     }
//   }
//   console.log(min1);
// }

// stray([1, 1, 1, 2]);

// function stray(numbers) {
//   num = 0;
//   if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//     num = numbers[0];
//   }
//   if (
//     numbers[numbers.length - 1] !== numbers[numbers.lenght - 2] &&
//     numbers[numbers.length - 1] !== numbers[numbers.lenght - 3]
//   ) {
//     num = numbers[numbers.lenght - 1];
//   }
//   for (let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
//       num = numbers[i];
//       break;
//     }
//   }
//   return num;
// }
// console.log(stray([1, 1, 2, 1, 1, 1, 1]));
// console.log(stray([1, 1, 1, 1, 1, 1, 1, 17, 1, 1, 1]));
// console.log(stray([1, 1, 1, 1, 1, 1, 1]));

// shelly +amina = bff HAHAHAHHAHHAHAHAHHAHAH

// function findLargestSumPair(arr) {
//   let first, second;

//   if (arr[0] > arr[1]) {
//     first = arr[0];
//     second = arr[1];
//   } else {
//     first = arr[1];

//     second = arr[0];
//   }

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > first) {
//       second = first;

//       first = arr[i];
//     } else if (arr[i] > second && arr[i] != first) second = arr[i];
//   }
//   return first + second;
// }

// function sortiranje() {
//   niz = [3, 44, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

//   for (let i = 0; i < niz.length; i++) {
//     for (let j = i + 1; j <= 0; j--) {
//       if (niz[j] < niz[j - 1]) {
//         let pomVar = niz[j];
//         niz[j] = niz[j - 1];
//         niz[n - 1] = pomVar;
//       } else {
//         break;
//       }
//     }
//   }
// }

// console.log(niz(niz.length - 1));
// console.log(niz(niz.length - 2));

// function nbYear(p0, percent, aug, p) {
//   let n = 0;
//   while (p0 < p) {
//     p0 = p0 + (p0 * percent) / 100 + aug;
//     n = n + 1;
//   }
//   return n;
// }
//////////////////////////////
//objekat je grupisanje nekih vrednosti

// covek1 = {
//   name: "amina",
//   surname: "jusufovic",
//   job: function () {
//     console.log("doing some job");
//   },
// };
// console.log(Object.keys(covek1));
// console.log(covek1.name);

// var student = {
//   name: "David Rey",
//   sclass: "VI",
//   rollno: 12,
// };

// console.log(Object.keys(student));

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// c1 = new Car("audi", 2019);
// console.log(c1);
// console.log(c1.age());

// class Macka {
//   constructor(name, year, color, weight) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//     this.weight = weight;
//   }
// }

// m1 = new Macka("Cici", 2022, "siva", "1kg");
// console.log(m1);

// m2 = new Macka("Kiki", 2018, "narandzasta", "3kg");
// console.log(m2);

// m3 = new Macka("Nini", 2015, "crna", "5kg");
// console.log(m3);

// o1 = {
//   name: "Amina",
//   surname: "Jusufovic",
// };
// o2 = {};
// let flatObj = Object.entries(o1);
// for (let i = 0; i < Object.entries.length; i++) {
//   console.log(flatObj[i]);
//   o2[flatObj[i][1]] = flatObj[i][0];
// }

// console.log(o1);
// console.log(o2);

// class Book {
//   constructor(title = "", genre, author) {
//     this.title = title;
//     this.genre = genre;
//     this.author = author;
//     this.read = false;
//     this.read_date = null;
//   }
// }

// class BookLists {
//   constructor() {
//     this.bookShelf = [];
//     this.booksRead = 0;
//     this.notBooksRead = this.bookShelf.length - this.booksRead;
//     this.nextBook = null;
//     this.currBook = null;
//     this.lastBook = null;
//   }

//   add(book) {
//     if (book instanceof Book) {
//       debugger;
//       this.bookShelf.push(book);

//       for (let i = 0; i < this.bookShelf.length; i++) {
//         if (!this.bookShelf[i].read) {
//           this.currBook = this.bookShelf[i];
//           if (this.bookShelf[i + 1]) {
//             this.nextBook = this.bookShelf[i + 1];
//           } else {
//             this.nextBook = null;
//           }
//           break;
//         }
//       }
//     } else {
//       console.log("Invalid argument type");
//     }
//   }

//   finishCurrentBook() {
//     for (let i = 0; i < this.bookShelf.length; i++) {
//       const book = this.bookShelf[i];
//       if (book.title === this.currBook.title) {
//         this.bookShelf[i].read = true;
//         this.bookShelf[i].read_date = new Date();
//         this.lastBook = this.currBook;
//         this.currBook = this.nextBook;
//         if (this.bookShelf[i + 1]) {
//           this.nextBook = this.bookShelf[i + 2];
//         }
//         break;
//       }
//     }
//   }
// }

// b1 = new Book("HP1", "magic", "JKR");
// b2 = new Book("HP2", "magic", "JKR");
// b3 = new Book("HP3", "magic", "JKR");
// b4 = new Book("HP4", "magic", "JKR");
// b5 = new Book("HP5", "magic", "JKR");

// bl = new BookLists();

// bl.add(b1);
// bl.add(b2);
// bl.add(b3);
// bl.add(b4);
// bl.add(b5);

// console.log(bl.lastBook);
// console.log(bl.currBook);
// console.log(bl.nextBook);

// bl.finishCurrentBook();

// console.log("=========================");
// console.log(bl.lastBook);
// console.log(bl.currBook);
// console.log(bl.nextBook);

// bl.finishCurrentBook();
// bl.finishCurrentBook();
// bl.finishCurrentBook();
// bl.finishCurrentBook();

// console.log("=========================");
// console.log(bl.lastBook);
// console.log(bl.currBook);
// console.log(bl.nextBook);

// console.log(bl.bookShelf);

// class Macka
// {
//   constructor(tiredness, lonliness, hunger, happiness)
//   {
//     this.tiredness = tiredness;
//     this.lonliness = lonliness;
//     this.hunger = hunger;
//     this.happiness = happiness;,
//   },
//  igranje: function()
// {
//   hunger += 5;

//   },
// }

// m1 = new Macka("");
// console.log(m1);

// m2 = new Macka();
// console.log(m2);

// o1 = {
//   a: 1,
//   b: 2,
// };
// console.log(object.entries(o1));

// const data = {
//   a: 1,
//   b: 2,
// };

// console.log(data);

// function withouth(data, prop) {
//   delete data[prop];
//   return data;
// }
// console.log(withouth({ a: 1, b: 2 }, "b"));

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The road ahead",
//     readingStatus: true,
//     age: 29,
//   },
//   {
//     author: "Bill Gates",
//     title: "The road ahead",
//     readingStatus: true,
//     age: 14,
//   },
//   {
//     author: "Bill Gates",
//     title: "The road ahead",
//     readingStatus: true,
//     age: 25,
//   },
//   {
//     author: "Bill Gates",
//     title: "The road ahead",
//     readingStatus: true,
//     age: 19,
//   },
//   {
//     author: "Bill Gates",
//     title: "The road ahead",
//     readingStatus: true,
//     age: 12,
//   },
// ];
// function godine(arr) {
//   rez = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age < 18) {
//       rez.push(arr[i]);
//     }
//   }
//   return rez;
// }

// console.log(godine(library));

// function wash(callback) {
//   setTimeout(function () {
//     console.log("wash");
//     callback();
//   }, 3000);
// }

// function dry(callback) {
//   setTimeout(function () {
//     console.log("dry");
//     callback();
//   }, 3000);
// }

// function fold(callback) {
//   setTimeout(function () {
//     console.log("fold");
//     callback();
//   }, 3000);
// }

// doLaudry([wash, dry, fold]);
``;
