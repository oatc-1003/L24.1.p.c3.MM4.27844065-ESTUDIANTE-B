export default class Estudiante{
    constructor({nombre, semestre, nota}){
        this.nombre=nombre;
        this.semestre=semestre;
        this.nota=nota;

    }

    set nombre(n){
        return this._nombre=n
    }
    get nombre(){
        return this._nombre
    }
    set semestre(s){
        return this._semestre=+s
    }
    get semestre(){
        return this._semestre
    }
    set nota(n){
        return this._nota=+n
    }
    get nota(){
        return this._nota
    }

}