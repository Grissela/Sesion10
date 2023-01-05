import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 val!:string;
 desc!:string;
 lista:any[] =[]


  guardar(vali:string ,descr:string){
    this.val=vali;
    this.desc=descr;

    class Listado{
      texto!:string;
      descriptivo!:string;
      constructor(text:string, des:string){
        this.texto=text
        this.descriptivo=des
      }
    }

    var info= new Listado(this.val, this.desc)
    this.lista.push(info)
    console.log(this.lista)

  }

}
