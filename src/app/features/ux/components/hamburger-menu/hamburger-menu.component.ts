import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-hamburger-menu',
  standalone: true,
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {
  @Input() isVisible: boolean = false;
  @Output() onMenuHide: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public onCloseButtonClick($event: MouseEvent): void {
    $event.preventDefault();
    this.isVisible = false;
    this.onMenuHide.emit($event);
  }
}
