import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from 'src/app/features/ux/components/logo/logo.component';
import { EventSfxDirective } from 'src/app/features/ux/directives/event-sfx.directive';

@Component({
  imports: [LogoComponent, EventSfxDirective, NgClass, RouterLink],
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
  @Output() linkClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}
}
