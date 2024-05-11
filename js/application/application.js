import { View } from "./../views/view.js"
import { Controller } from "./../controllers/controller.js"
import { Counter } from "./../models/counter.js"

function creation(){
    const controller = new Controller();
    const view = new View(controller);
}
window.addEventListener("load", creation);
