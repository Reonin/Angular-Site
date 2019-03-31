import { Component, OnInit } from '@angular/core';
import { GameserviceService } from 'src/app/gameservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from 'src/app/game.model';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent {


  games: Observable<any[]>;
 constructor(db: AngularFirestore) {
   console.log(this.games);
   this.games = db.collection('games').valueChanges();
 }

}
