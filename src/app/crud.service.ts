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

  createData(input: String) {
      const merkel = this.firestore.collection("hashtags");
      merkel.doc("Vue").set({name: input})
      //const hashtagDoc = {name: input};
      //merkel.add(hashtagDoc);

  }
}
