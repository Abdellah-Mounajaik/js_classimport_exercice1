import {humain} from "./humain.js"

class archer extends humain{
    constructor(nom,age,fleches){
        super(nom,age)
        this.fleches=fleches;
    }
    
}
let jean = new archer ("abdel",20,"fleches")
console.log(jean);