import {humain} from "./humain.js"
class mage extends humain{
    constructor(nom,age,magie){
        super(nom,age)
        this.magie=magie;
    }
    
}
let test = new mage("test",70,"magie")
console.log(test);