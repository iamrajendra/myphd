import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private firestore: AngularFirestore) { }
  /** GET heroes from the server */
  
  getHeroes() {
    
    return this.firestore.collection('myphd').snapshotChanges();

  }

  addHero(hero: Hero){
    return this.firestore.collection('myphd').add(hero);
}

getHeroById(id: string){
  return this.firestore.collection('myphd').doc(id);
  

}

deleteHero(id: string){
  console.log("Service ID OF DELETE ELEMENT"+id);
  this.firestore.doc('myphd/' + id).delete();
}

  }