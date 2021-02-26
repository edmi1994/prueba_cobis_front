import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../libro-service';
import { Libro } from '../libro.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {
ngOnInit(){
  
}

}
