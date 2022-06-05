import { Component, OnInit } from '@angular/core';
import { HashtagsComponent } from '../hashtags/hashtags.component';

@Component({
  selector: 'app-hashtag-materials',
  templateUrl: './hashtag-materials.component.html',
  styleUrls: ['./hashtag-materials.component.css'],
  providers: [HashtagsComponent]
})
export class HashtagMaterialsComponent implements OnInit {

  arrayFile: any = new Set();

  constructor(private hashtags: HashtagsComponent) { }

  ngOnInit(): void {
  }

  arrayFiles() {
    const file = this.hashtags.arrayFiles[0];
    this.arrayFile.add(file);
    console.log(file);
  }

}
