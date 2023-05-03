import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HamburgerIconComponent } from 'src/app/features/ux/components/hamburger-icon/hamburger-icon.component';
import { HamburgerMenuComponent } from 'src/app/features/ux/components/hamburger-menu/hamburger-menu.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  imports: [HeaderComponent, HamburgerIconComponent, HamburgerMenuComponent, CommonModule],
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  public menuVisible: boolean = false;

  public onOverlayClick($event: Event): void {
    $event.preventDefault();
    console.log('CLICK');

    this.menuVisible = false;
  }
  public onHamburgerIconClick($event: Event): void {
    this.menuVisible = true;
  }
}
