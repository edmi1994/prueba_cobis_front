import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import {LibrosComponent} from './libros/libros.component';

const routes : Routes = [
{path:'', component: LibrosComponent},
{path:'libros', component: LibrosComponent,children:[
    {path:'agregar',component:FormularioComponent},
    {path:':idLibro', component:FormularioComponent}
]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}