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

// const numbers = [27, 28, 14, 6, 19, 55, 11];

// function kvadrat(numbers, arg) {
//   for (let i = 0; i < numbersy.length; i++) {
//     numbers.array.forEach((element) => {
//       numbers[i] * 2;
//     });
//     console.log(numbers);
//   }
// }
// const numbers = [27, 28, 14, 6, 19, 55, 11];

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

// const numbers = [45, 4, 9, 16, 25, 13, 38, 68, 61, 52, 29];
// const evenNumbers = [];
// numbers.forEach((el) => {
//   if (el % 2 === 0) {
//     evenNumbers.push(el);
//   }
// });
// console.log(evenNumbers);

// let str = "the quick brown fox";
// const myArray = str.split(" ");
// const newStr = "";
// myArray.forEach((char, i) => {
//   if (i % 2 === 0) {
//     newStr += char.toLowerCase();
//   } else {
//     newStr += char.toUpperCase();
//   }
// });
// console.log(myArray);

// data = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// let counter = 0;
// data.forEach((element) => {
//   if (!element) {
//     counter++;
//   }
// });

// console.log(counter);

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
//  console.log(persons);

//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   };

//map - koristimo kad hocemo da uradimo nesto na svim elementima, pravi novi niz sa istim brojem el, koliko ima el u stari niz , toliko mora da ima i unovi niz
// izdvaja neke elemente iz niza

//filter - pravi novi niz, popunjava ga elementima koji ispunjavju uslov

//foreach - kada nesto treba da pomnozimo, podelimo

// const cars = ["BMW", 123, false, "Sab", 12.5, "Jps jedan element"]

// arr1 = cars.map((el) => {
// return el + "novi el"
// });

// console.log(arr1);

//const cars = ["BMW", 123, false, "Sab", 12.5, "Jps jedan element"]

// arr1  = cars.map((el) => {
// if (typeof el === "number") {
//     return el;
// }
// });

// arr2  = cars.map((el) => {
//     if (typeof el === "number") {
//         return el;
//     }
// });
// console.log(arr1);
// console.log(arr2);

// some - da li makar jedan el u nizu ispunjava dati uslov

// arr1 = [1, 2, 3, 4, 5, 5, 7, 6, 5, 5, 5, 5, 5];

// res = arr1.some((el) => {
// return el > 6;
// });

// //every - da svaki element ispuni uslov

// res2 = arr1.every((el) => {
//     return el > 0;
//     });

// // console.log(arr1);
// // console.log(res);
// // console.log(res2);

// if (
//     !arr1.every((el) => {
//         return el < 1
//     })
// ) {
//     console.log("ne ispunjavaju svi elementi dati uslov");
// }else {
//     console.log("ispunjavaju svi elementi dati uslov");
// }

// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4

// const sumWithInitial = array.reduce((previousValue, currentValue) => {
//     if (currentValue % 2 === 0) {
//         return previousValue + 1;
//     } else {
//         return previousValue;
//     }
// }, 0);

// console.log(sumWithInitial);
// // expected output: 10

// function findMissing(arr1, arr2) {
//     arr2.forEach((el) => {
//         if (arr1.includes(el)) {
//             arr1.splice(arr1.indexOf(el), 1);
//         }
//     });

//     return arr1[0];
// }

// res = findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]);
// res2 = findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]);

// console.log(res);
// console.log(res2);

// console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]),);

// const heros = [
//   { name: "Spider Man" },
//   { name: "Thor" },
//   { name: "Black Panther" },
//   { name: "Captain Marvel" },
// ];

// const heros2 = heros.map((el, index) => {
//   return {
//     id: index,
//     hero: el.name,
//   };
// });

// console.log(heros2);

// function job() {
//   return "hello world";
// }
// var mypromise = new Promise((resolve, reject) => {
//   resolve(job());
// });
// mypromise.then((val) => {
//   console.log(val);
// });
//function job() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 2000);
//   });
// }
// job().then((res) => {
//   console.log(res);
// });

//map-vraca niz iste duzine, mora da bude isti lenght
//lastIndexOf-daje nam indekse
//data.find- vraca prvi elemnt koji ispunjava ovaj uslov
//data.map- primeni funkciju i vrati novi niz;
//data.filter-dobija funkciju,  na osnovu uslova on nama taj el vraca;
//ukoliko ispunjava uslov dodaje se u noviniz
//data.every-saljemo funkciju, vraca nam da li svi el u nizu ispunjavaju uslov true/false
//data. some-da li barem jedan el ispunjava  uslov niz, vraca true ili false
//forEach-metoda niza-dobija funkciju-kao for petlja-za svaki element izvrsi ovu funkciju
//algoritam-sort

//metoda niza koja prosledjuje funkciju
//callback

//asinhroni Javascript se sastoji od:
//call stack
//web api
//que
//
//saljemo funk kao argument i pozivamo na kraju

// var miles = Number(prompt("Unesite vrednost milja:"));
// const per = 0.6214;
// var kilometers = Math.floor(miles / per);
// console.log(miles + " mi iznosi:", kilometers + " km");
//promise-odg +-====pending=cekanje
//resolve=uspesno
//reject= neuspesno

//emedientli evolve
//promises
//callback=posaljemo funk u argument
//then= nakon izvrsenog posla izvrsi
//catch
//finally=radi neki posao uvekk
//chaining
//develeoper mozzila using promises
//nested promise chain= promesise sa 2 then-a
//promise ide u micro task, kao vazniji

//all= funkcija
//prosledjvanje 2 pr kao argument

// // [promise1, promise2, pormise3]
// Promise.all().then(() => {
//   console.log("promise all");
// });
//pitaju na interviju!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Promise.resolve("prvi korak")
//   .then((arg1) => {
//     console.log(arg1);
//     return "drugi korak";
//   })
//   .then((value) => {
//     value.split("").forEach((l) => {
//       console.log(l);
//     });
//     return value.slice(1);
//   })
//   .then((arg) => {
//     let var1 = 0;
//     console.log(var1 + arg.length * 5);
//   });

// async= vraca se direkt promise
//  await
// //typeOf
// async function some() {
//   return "prvi korak";
// }

// some()
//   .then((arg1) => {
//     console.log(arg1);
//     return "drugi korak";
//   })
//   .then((value) => {
//     value.split("").forEach((l) => {
//       console.log(l);
//     });
//     return value.slice(1);
//   })
//   .then((arg) => {
//     let var1 = 0;
//     console.log(var1 + arg.length * 5);
//   });

//ovo sto sam slikala dodajem na to try catch

//shadow copy x deep copy
//proxi dns
//http-protokol
//DOM pravimo app
//objekti, nizove struk podata setovi hash mapa, metoda niza
//try catch

//all= izbaciju niz ako su resolve a izbacujr rjecet za 1 koji je reject
//race=prvo pr koji uradi svoj posao ide na catch
//news= prvi koji se resolva ide na then
//allSettled()
//throw
//iffie

// try {
//   try {
//     throw new Error("oops");
//   } catch (ex) {
//     console.error("inner", ex.message);
//     throw ex;
//   } finally {
//     console.log("finally");
//   }
// } catch (ex) {
//   console.error("outer", ex.message);
// }

// // p-protokol-radnja po precizno odredjenim koracima
// //http- sastoji se od metoda za trazenje
// //http se sastoji iz dve osnovne radnje - request i response
// //2 delA Ima head i body
// //local host
// //get i post najkorisceniji
// //post-body.................put and patch
// //get-da uzmemo podate i da dobijemo response
// //request= u zavisnoti od metoda= metoda get head post put delete
// //request= header and body- stavljamo informacije da bismo dobili odgovor
// //response= header and body
// //statusni kod, http internet protokoli
// //https-
// //statusni kod-5-standard odgovora, kad dobijemo response prvo proveravamo koji je status kod

// promise radimo rucno pravimo request and response do
// //web socket

// const myProm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(undefined);
//   }, 2000);
// });

// function handlerError() {
//   console.log("DESI SE NEKI error");
//   console.log("aksndjaslsadlsan");
//   console.log("aksndjaslsadlsan");
//   console.log("ERROR JE HANDLED");
// }

// async function getData() {
//   try {
//     const users = await myProm;

//     users.map((el) => {
//       console.log(el);
//     });
//   } catch (err) {
//     handlerError();
//   }
// }

// getData();

// fetch("https://catfact.ninja/facts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(() => {
//     console.log("greska sa serverom");
//   });

// async function getData(){ try{
//   const response = await fetch("https://catfact.ninja/facts");
//   const resJson = await response.json();
//   console.log(resJson);
// }catch(err){console.log("PROBLEM SA SERVEROM");}
// getData();

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const resJson = await response.json();
//   console.log(resJson);
// }
// getData();

// async function getData() {
//   const response = await fetch("https://catfact.ninja/facts");
//   const resJson = await response.json();
//   console.log(resJson);
// }
// getData();

// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }
// f1 = sum(1);
// f2 = f1(2);
// f3 = f2(3);
// res = f3(4);

// console.log(res);

// console.log(sum(1)(2)(3)(4));

// function generateCard(vals) {
//   var subDiv = document.createElement("div");
//   subDiv.style.width = "200px";
//   subDiv.style.height = "300px";
//   subDiv.style.backgroundColor = "orange";
//   subDiv.style.border = "solid 1px black";
//   subDiv.style.borderRadius = "10px";
//   subDiv.style.margin = "10px";
//   subDiv.innerHTML = vals.fact;
//   return subDiv;
// }

// var src = document.getElementById("moj_div");
// src.style.display = "flex";
// src.style.justifyContent = "flex-start";
// src.style.flexWrap = "wrap";

// fetch("https://catfact.ninja/facts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     for (let i = 0; i < res.data.length; i++) {
//       src.appendChild(generateCard(res.data[i]));
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
