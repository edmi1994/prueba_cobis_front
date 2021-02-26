import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Libro} from './libro.model';
import { stringify } from "@angular/compiler/src/util";

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient){}

    url_base = 'http://localhost:8090/prueba_cobis_back/webservice/libros';

    cargarLibros(){
        return this.httpClient.get(this.url_base);
    }

    agregarLibro(libro: Libro){
        return this.httpClient.post(this.url_base,libro);
    }

    modificarLibro(id:number,libro:Libro){
        let url:string;
        url = this.url_base+'/'+id;
        this.httpClient.put(url,libro)
        .subscribe((response)=>{
            console.log("Libro modificado:" + response);
        },
        (error)=>console.log("Error al modificar: "+ error)
        );
    }

    eliminarLibro(id:number){
        console.log("data "+id);
        
        let url :string;
        url = this.url_base+"/"+id;

        console.log(url);
        this.httpClient.delete(url)
        .subscribe((response)=>{
            console.log("Libro eliminado:" + response);
        },
        (error)=>console.log("Error al eliminar: "+ error)
        );

    }
}