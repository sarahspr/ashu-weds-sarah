import { Component } from '@angular/core';
import { LogoComponent } from 'src/app/features/ux/components/logo/logo.component';
import { EventSfxDirective } from 'src/app/features/ux/directives/event-sfx.directive';

@Component({
  imports: [LogoComponent, EventSfxDirective],
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
