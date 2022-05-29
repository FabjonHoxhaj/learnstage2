import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  readData() { 
    return this.firestore.collection("hashtags").valueChanges();
  }

  createData() {

  }
}
