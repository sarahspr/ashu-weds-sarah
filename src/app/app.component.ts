import { Component, OnInit, Renderer2 } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

import { Device } from './core/models/device.interface';
import { DeviceDetectorService } from './core/services/device-detector.service';
import { NavigationEnd, Router } from '@angular/router';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public deviceType$: Observable<Device> = this.deviceDetectorService.deviceType$;
  public isLoading$ = new Observable<boolean>();

  constructor(
    private appStateService: AppStateService,
    private deviceDetectorService: DeviceDetectorService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.deviceDetectorService.init();
    this.initRouteChangeEvent();

    console.log('We are honored that you visit our website and liked it! :)');
  }

  private initRouteChangeEvent() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setLoader(event);
        this.setPageDataAttr(event);
      }
    });
  }

  private setLoader(event: NavigationEnd): void {
    if (event.url === '/') {
      // wait for image to load on homepage
      this.isLoading$ = this.appStateService.getIsHeroLoading$();
    } else {
      this.isLoading$ = of(false);
    }
  }

  private setPageDataAttr(event: NavigationEnd): void {
    const pageClass = this.getPageClass(event);
    this.renderer.setAttribute(document.body, 'data-page', pageClass);
  }

  private getPageClass(event: any): string {
    if (event.url.includes('/event')) {
      return 'events';
    } else if (event.url.includes('/travel')) {
      return 'travel';
    } else if (event.url.includes('/venue')) {
      return 'venue';
    } else {
      return 'homepage';
    }
  }
}
