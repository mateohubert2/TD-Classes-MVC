//let counter = 0;

//export function getCounter(){
//    return counter;
//}

/*export class Counter{
    #value;
    constructor(){
        this.#value = 0;
    }
    getValue(){
        return this.#value;
    }
    incrementValue(){
        this.#value += 1;
    }
    decrementValue(){
        this.#value -= 1;
    }
}*/

export class Counter{
    #value;
    constructor(){
        this.#value = 0;
    }
    get value(){
        return this.#value;
    }
    incrementValue(){
        this.#value += 1;
    }
    decrementValue(){
        this.#value -= 1;
    }
}
