import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LogoComponent } from 'src/app/features/ux/components/logo/logo.component';
import { EventSfxDirective } from 'src/app/features/ux/directives/event-sfx.directive';

@Component({
  imports: [LogoComponent, EventSfxDirective, NgClass],
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';

  constructor() {}
}
