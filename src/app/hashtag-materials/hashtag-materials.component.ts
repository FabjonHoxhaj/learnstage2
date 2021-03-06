import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../crud.service';
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../models/file-upload.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hashtag-materials',
  templateUrl: './hashtag-materials.component.html',
  styleUrls: ['./hashtag-materials.component.css']
})
export class HashtagMaterialsComponent implements OnInit {

  files: any[] = [];

  constructor(private hashtagFile: CrudService, private uploadService: FileUploadService, private activate: ActivatedRoute) { }

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  fileUploads?: any[];

  ngOnInit(): void {
      this.hashtagFile.readFiles(this.activate.snapshot.paramMap.get("name"));
      this.hashtagFile.getFileName().subscribe((data)=> {
        this.files = [];
        this.files = data;
      })
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.activate.snapshot.paramMap.get("name"), this.currentFileUpload);
      }
    }
    const filename = this.uploadService.saveFileName();
    const url = this.uploadService.saveURL();
  }


}
