import { Component, OnInit,OnDestroy } from '@angular/core';
import { LibroService } from '../libro-service';
import { Libro } from '../libro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-tabla-component',
  templateUrl: './tabla-component.component.html',
  styles: [
  ]
})
export class TablaComponentComponent implements OnDestroy,OnInit {
  closeResult = '';
  dtOptions: DataTables.Settings = {};
  libros : Libro[]=[];
  dtTrigger: Subject<any> = new Subject<any>();
  id:number;
  nombre:string;
  descripcion:string;
  autor:string;
  fecha_publicacion :Date;
  n_ejemplares: number;
  costo:number;
  title:string;
  constructor(private modalService: NgbModal,private libroService:LibroService, private router:Router,private route: ActivatedRoute){
  }

  open(content,item=null) {
    var libro;
    if(item!=null){
      libro = this.libroService.encontrarLibro(item.id);
      this.title="Editar Libro";
    }
    else{
      this.title="Ingresar Libro";
    }

    if(libro != null){
        this.id=libro.id;
        this.nombre = libro.nombre;
        this.descripcion= libro.descripcion;
        this.autor=libro.autor;
        this.fecha_publicacion=libro.fecha_publicacion;
        this.n_ejemplares=libro.n_ejemplares;
        this.costo=libro.costo;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.id=null;
      this.nombre =null;
      this.descripcion=null;
      this.autor=null;
      this.fecha_publicacion=null;
      this.n_ejemplares=null;
      this.costo=null;
    });
  }
  eliminarLibro(id){
    console.log(id);
    this.libroService.eliminarLibro(id);
    
}
  guardarLibro(){
    let hoy = moment(new Date());
    let fecha = moment(this.fecha_publicacion);
    
    if(moment(hoy).diff(moment(fecha),'years',true)>10){
      return alert("El libro no puede tener mas de 10 años de publicación");
    }
    const libro = new Libro(this.id,this.nombre,this.descripcion,this.autor,this.fecha_publicacion,this.n_ejemplares,this.costo);
    if(this.id!=null){
      this.libroService.modificarLibro(this.id, libro);
      this.modalService.dismissAll();
    }
    else{
      this.libroService.agregarLibro(libro);
      this.modalService.dismissAll();
    }
    this.router.navigate(['libros']);
  }

  


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.libroService.obtenerLibros()
    .subscribe((librosObtenidos: Libro[])=>{
        this.libros=librosObtenidos;
        this.libroService.setLibros(this.libros);
        console.log(this.libros);
        this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
