import { Component, Output, EventEmitter,Input } from '@angular/core';
import { Historial_alumno } from './../../modulos/historial-colegio';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {


    @Output() public salida = new EventEmitter;
    @Output() public enviarDato = new EventEmitter<Historial_alumno>();



    @Input() public alumno!: Historial_alumno;
    @Output() public idalumno = new EventEmitter<string>();
    public emitirId(): void {
      this.idalumno.emit(this.alumno.rut);
    }

    public nuevoHistorial: Historial_alumno = {
      rut : '' ,
      nombre: '',
      apellido:'',
      edad:'',
      seccion:'',
    }

    public guardarHistorial(): void {
      const copia : Historial_alumno ={
        ...this.nuevoHistorial
      }
      this.enviarDato.emit(copia);
      this.nuevoHistorial.rut = '';
      this.nuevoHistorial.nombre = '';
      this.nuevoHistorial.apellido ='';
      this.nuevoHistorial.edad ='';
      this.nuevoHistorial.seccion='';
      console.log('mensaje desde formulario-seccion')
      this.salida.emit()
    }



    public cambiarId(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.nuevoHistorial.rut = elemento.value;
    }

    public cambiarNombre(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.nuevoHistorial.nombre = elemento.value;
    }
    public cambiarApellido(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.nuevoHistorial.apellido = elemento.value;
    }
    public cambiarEdad(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.nuevoHistorial.edad = elemento.value;
    }
    public cambiarSeccion(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.nuevoHistorial.seccion = elemento.value;
    }






}
