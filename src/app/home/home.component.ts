import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

 gifs = [`../assets/gif/tharshe.gif`,`../assets/gif/Voltrongif4.gif`,`../assets/gif/incubate.gif`];

 images = [0, 1, 2].map(( index) => this.gifs[index]);
  constructor() { }

  ngOnInit() {
  }

}
