const GeometricShape = require('./GeometricShape');
const StringSplitter = require('./StringSplitter');
const Student = require('./Student');

//---------------ESERCIZIO 0



let stu1 = new Student ("Francesco", "Bertolini", "2001", "rubare nei supermercati", "le cose rubate sono piú buone");
let stu2 = new Student ("Daniele", "Madeddu", "1992", "leggere manga", "la vita è il nemico");

//stu1.getMotto();
//stu1.getAge();
//console.log(stu1.haveSameHobby(stu2.getHobby));
console.log(stu1.compareAge(stu2.getAge()));


//---------------ESERCIZIO 1

let st1 = new StringSplitter("bomba");
let st2 = new StringSplitter("bombay")

//console.log(st1.getSplits(2));
//console.log(st1.getAllSplits());
console.log(st1.addArrays(st1.getAllSplits(), st2.getAllSplits()));

//---------------ESERCIZIO 2
let s1 = new GeometricShape("Gianni","square", 4, 3, 3);
let s2 = new GeometricShape("Bibo","square", 4, 2, 2);

//console.log(s1.getAltezza())
//console.log(s1.calculatePerimeter());
//console.log(s2.calculatePerimeter());
//console.log(s1.calculateAreas());
//console.log(s2.calculateAreas());
//console.log(s1.compareShapes(s1, s2))
s1.drawShape();