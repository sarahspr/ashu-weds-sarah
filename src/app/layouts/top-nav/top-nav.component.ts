import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  imports: [CommonModule, HeaderComponent]
})
export class TopNavComponent {}
