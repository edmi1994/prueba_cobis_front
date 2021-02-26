import { Injectable } from "@angular/core";
import {DataService} from './data-service';
import {Libro} from './libro.model';
@Injectable()

export class LibroService{
    libros: Libro[] = [];
    
    constructor(private dataService:DataService){

    }

    setLibros(libros: Libro[]){
        this.libros=libros;
    }

    obtenerLibros(){
        return this.dataService.cargarLibros();
    }

    agregarLibro(libro:Libro){
        console.log('libro a agregar: '+ libro.nombre);
        this.dataService.agregarLibro(libro)
        .subscribe((libro:Libro)=>{
            //recuperar 
            console.log("Agregar al arreglo libro" +libro.id)
            this.libros.push(libro);
        })
    }

    encontrarLibro(id:number){
        const libro: Libro = this.libros.find(persona => persona.id==id);
        return libro;
    }

    modificarLibro(id:number,libro: Libro){
        const libroModificado = this.libros.find(libro=>libro.id==id);
        libroModificado.id = libro.id;
        libroModificado.nombre = libro.nombre;
        libroModificado.descripcion= libro.nombre;
        libroModificado.autor=libro.autor;
        libroModificado.fecha_publicacion=libro.fecha_publicacion;
        libroModificado.n_ejemplares=libro.n_ejemplares;
        libroModificado.costo=libro.costo;
        this.dataService.modificarLibro(id,libro);
    }

    eliminarLibro(id:number){
        console.log("id "+id);
        const index = this.libros.findIndex(libro=> libro.id==id);
        this.libros.splice(index,1);
        this.dataService.eliminarLibro(id);
    }
}

