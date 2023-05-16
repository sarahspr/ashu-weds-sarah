import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() logoClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor(private router: Router) {}

  public onLogoClick($event: MouseEvent): void {
    this.logoClick.emit($event);
    this.router.navigateByUrl('/');
  }
}
