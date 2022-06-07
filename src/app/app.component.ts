import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class AppComponent implements OnInit{
  title = 'learnstage2';

  constructor() {}

  ngOnInit() {
    
  }
}
