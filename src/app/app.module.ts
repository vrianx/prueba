import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeccionComponent } from './formulario/seccion/seccion.component';
import { AlumnoComponent } from './formulario/alumno/alumno.component';
import { ListarComponent } from './formulario/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    SeccionComponent,
    AlumnoComponent,
    ListarComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
