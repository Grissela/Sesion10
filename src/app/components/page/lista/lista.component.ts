import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{

  @Input () valList!:String;
  @Input () descList!:String;
  @Input () listaList:any[] =[]



}
