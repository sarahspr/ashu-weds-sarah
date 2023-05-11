import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [NgIf],
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() src: string = '';

  constructor(private router: Router) {}

  public onLogoClick($event: MouseEvent): void {
    this.router.navigateByUrl('/');
  }
}
