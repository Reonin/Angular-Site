import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from 'src/app/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

constructor(private firestore: AngularFirestore) { }
getGamees() {
    return this.firestore.collection('games').snapshotChanges();
}


}
