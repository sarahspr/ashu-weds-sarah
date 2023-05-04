import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [NgIf],
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() src: string = '';
}