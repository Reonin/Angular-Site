import { Component,OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  public constructor(private titleService: Title ) { }

   public setTitle() {

     var arr = ['ようこそ', 'Welcome', 'benvenuto', 'Bienvenido'];
        this.titleService.setTitle( arr[Math.floor(Math.random()*arr.length)] );
   }

   ngOnInit(){
     this.setTitle();



   }


}
