const GeometricShape = require('./GeometricShape');
const StringSplitter = require('./StringSplitter');




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