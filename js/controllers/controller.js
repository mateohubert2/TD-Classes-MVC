import { Counter } from "./../models/counter.js"
import { Notifier } from "./../pattern/notifier.js"
export class Controller extends Notifier{
    #counter = new Counter();
    constructor(){
    super();
    }
    incrementCounter(){
        this.#counter.incrementValue();
        this.notify();
    }
    decrementCounter(){
        this.#counter.decrementValue();
        this.notify();
    }
    getCounterValue(){
        this.notify();
        return this.#counter.value;
    }
}
