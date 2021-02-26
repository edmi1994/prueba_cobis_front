import { isConstructorDeclaration } from "typescript"

export class Libro{
    constructor(public id: number, public nombre:string, public descripcion:string, public autor:string,
                public fecha_publicacion:Date,public n_ejemplares:number,public costo:number){}
}