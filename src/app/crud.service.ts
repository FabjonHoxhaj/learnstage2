import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

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
    let files: any = [];
    const hashtagSplit = hashtagString.split("#");
    this.firestore.collection("hashtags").doc(hashtagSplit[1]).collection("files").valueChanges().subscribe((data: any) => { 
      for(let i of Object.values(data))
      files.push(i)
    });
      this.setFileName(files)
  }

  setFileName(element:[]) {
    this.fileName.next(element);
  }

  getFileName() {
    return this.fileName;
  }

  createFileName(filename: any) {
      this.firestore.collection("hashtags").doc("Einführung in die Programmierung").collection("files").doc("file3").set({name: filename});
      console.log(filename)
  }

  createURL() {
      
  }
}
