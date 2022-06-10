import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../app/models/file-upload.model';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage) { }

  private basePath = '/uploads';
  urlLinks: any = [];
  fileName: any = [];

  pushFileToStorage(fileUpload: FileUpload) {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
        finalize(() => {
            storageRef.getDownloadURL().subscribe(downloadURL => {
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
                const url: String = fileUpload.url;
                this.urlLinks.push(url);
                const filename: String = fileUpload.name;
                console.log(filename);
                this.fileName.push(filename);
            });
        })
    ).subscribe();
}

private saveFileData(fileUpload: FileUpload): void {
  //this.db.list(this.basePath).push(fileUpload);
}

saveURL() {
   return this.urlLinks[0];
}

saveFileName() {
  console.log(this.fileName[0]);
  return this.fileName[0];

}

}
