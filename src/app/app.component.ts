import { Component } from '@angular/core';
import { Historial_alumno } from './modulos/historial-colegio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba3';
  public elementosGuardados: Array<Historial_alumno> = [];



}
