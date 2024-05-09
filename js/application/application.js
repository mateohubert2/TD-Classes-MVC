import { View } from "./../views/view.js"
import { Controller } from "./../controllers/controller.js"
import { Counter } from "./../models/counter.js"

const counter = new Counter();
function afficher(controller){
    //console.log(counter.getValue());
    console.log(controller.getCounterValue());
}
//function creation(){
//    const controller = new Controller();
//    const view = new View(controller);
//}
//window.addEventListener("load", creation);
let controller = new Controller();
let view = new View(controller);
window.addEventListener("load", afficher(controller));
