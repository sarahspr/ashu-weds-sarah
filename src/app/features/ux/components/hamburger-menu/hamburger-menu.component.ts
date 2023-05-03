import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-hamburger-menu',
  standalone: true,
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {
  @Input() isVisible: boolean = false;
}
