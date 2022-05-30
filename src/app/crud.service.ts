import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  readData() { 
      return this.firestore.collection("hashtags").valueChanges();
      //this.firestore.collection("hashtags").doc("Einführung in die Programmierung").collection("files").valueChanges(); --> Name aus einer Datei auslesen also verschachtelt 
  }

  createData(input: String) {
      const merkel = this.firestore.collection("hashtags");
      const inputSplit = input.split("#");
      merkel.doc(inputSplit[1]).set({name: input})
  }
}
