import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  fileName: BehaviorSubject<[]> = new BehaviorSubject([]);
  

  readHashtags() { 
      return this.firestore.collection("hashtags").valueChanges();
  }

  createHashtags(input: String) {
      const merkel = this.firestore.collection("hashtags");
      const inputSplit = input.split("#");
      merkel.doc(inputSplit[1]).set({name: input})
  }

  readFiles(hashtagString: any) {
    let merkel: any = [];
    const hashtagSplit = hashtagString.split("#");
    this.firestore.collection("hashtags").doc(hashtagSplit[1]).collection("files").valueChanges().subscribe((data: any) => 
    { console.log(data);
      for(let i of Object.values(data))
      
      merkel.push(i)});
      this.setFileName(merkel)
  }

  setFileName(value:[]) {
    this.fileName.next(value);
  }

  getFileName() {
    return this.fileName;
  }

  loadFiles() {
      //const name =this.fileName[0];
      //console.log(name);
      return name;
  }


}
