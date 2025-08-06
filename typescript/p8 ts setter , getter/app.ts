class Person{
    constructor( public _name : String ,public _roll:number){};

    get name(): String {
        return this._name ;
    }
    set name(newName :String){
        this._name= newName ;
    }
     get roll(): number {
        return this._roll ;
    }
    set roll(newRoll :number){
        this._roll= newRoll ;
    }
}


let student = new Person("Aditya", 13);

