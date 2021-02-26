import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../libro-service';
import { Libro } from '../libro.model';
import { GridOptions } from "@ag-grid-community/all-modules";
import { TablaComponentComponent } from "../tabla-component/tabla-component.component";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
@Component({
    selector: 'app-libros',
    templateUrl: './libros.component.html',
    styles:[]
})

export class LibrosComponent implements OnInit{

    libros : Libro[]=[];
    constructor(private libroService:LibroService, private router:Router,private route: ActivatedRoute){
    }


    librostraer(){
        this.libroService.obtenerLibros()
        .subscribe((librosObtenidos: Libro[])=>{
            this.libros=librosObtenidos;
            this.libroService.setLibros(this.libros);
            console.log(this.libros);

        })
    }
    ngOnInit(){
        this.librostraer();
    }
}