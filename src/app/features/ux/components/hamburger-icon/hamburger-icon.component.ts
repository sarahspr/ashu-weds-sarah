import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-icon',
  standalone: true,
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.scss']
})
export class HamburgerIconComponent {
  @Output() iconClicked: EventEmitter<Event> = new EventEmitter();

  public onIconClick($event: Event): void {
    this.iconClicked.emit($event);
  }
}
