import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-hashtag-materials',
  templateUrl: './hashtag-materials.component.html',
  styleUrls: ['./hashtag-materials.component.css']
})
export class HashtagMaterialsComponent implements OnInit {

  files: any[] = [];

  constructor(private fileName: CrudService) { }

  ngOnInit(): void {
      this.fileName.getFileName().subscribe((data)=>{
        this.files = data;
      })
  }



}
