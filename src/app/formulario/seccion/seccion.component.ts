import { Component, Output, EventEmitter } from '@angular/core';
import { Historial_seccion } from './../../modulos/historial-colegio';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent  {

  @Output() public salida = new EventEmitter;
  @Output() public enviarDato = new EventEmitter<Historial_seccion>();

  public nuevoHistorial: Historial_seccion = {
    id : '' ,
    nombreseccion: '',

  }

  public guardarHistorial(): void {
    const copia : Historial_seccion ={
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorial.id = '';
    this.nuevoHistorial.nombreseccion = '';
    console.log('mensaje desde formulario-seccion')
    this.salida.emit()
  }



  public cambiarId(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.id = elemento.value;
  }

  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombreseccion = elemento.value;
  }




}
