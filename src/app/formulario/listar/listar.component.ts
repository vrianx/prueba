import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Historial_alumno } from './../../modulos/historial-colegio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  @Input() public alumno: Array<Historial_alumno> = [];
  @Output() public posIndex = new EventEmitter<number>();

  public escucharId(rut: string): void {
    const pos = this.alumno.findIndex((elemento) => {
      return rut === elemento.rut;
    });
    this.posIndex.emit(pos);
  }

}
