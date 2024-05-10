import { Observer } from "./../pattern/observer.js"
import { Controller } from "./../controllers/controller.js"
import { Notifier } from "./../pattern/notifier.js"
export class View extends Observer{
    #controller;
    constructor(controller){
        super();
        this.#controller = controller; 
        const incrementer = document.querySelector("#btn-increment");
        incrementer.addEventListener("click", ()=>{
            this.#controller.incrementCounter();
            this.notify();
        });
        const decrementer = document.querySelector("#btn-decrement");
        decrementer.addEventListener("click", ()=>{
            this.#controller.decrementCounter();
            this.notify();
        });
    }
    notify(){
        const par = document.querySelector("#txt-counter");
        let temp = (this.#controller.getCounterValue()).toString();
        par.innerHTML = temp;
    } 
}
