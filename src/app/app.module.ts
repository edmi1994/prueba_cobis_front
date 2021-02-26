import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibroService } from './libro-service';
import { DataService } from './data-service';
import {LibrosComponent} from './libros/libros.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import { AgGridModule } from "ag-grid-angular";
import { TablaComponentComponent } from './tabla-component/tabla-component.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    FormularioComponent,
    TablaComponentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    BrowserModule,
    AppRoutingModule
    , DataTablesModule
    
  ],
  providers: [LibroService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
