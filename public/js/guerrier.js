import {humain} from "./humain.js"
class guerrier extends humain{
    constructor(nom,age,force,vie){
        super(nom,age)
        this.force=force;
        this.vie=vie;
    }
    
}
let marc = new guerrier("marc",55,"force","vie")
console.log(marc);