import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public headline: string;

  constructor() {
    this.headline = 'test';
  }

  onParaClick() {
    alert(this.headline);
  }
}
