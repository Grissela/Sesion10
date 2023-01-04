import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{

  @Input() valor!:string;
  @Input() descripcion!:string;


}
