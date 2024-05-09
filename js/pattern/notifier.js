export class Notifier{
    #observers;
    constructor(){
        this.#observers = [];
    }
    addObserver(observer){
        this.#observers.push(observer);
    }
    notify(){
        for(var i=0; i < this.#observers.length; i++){
            this.#observers[i].notify();
        }
    }
}
