import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';

import { Device } from './core/models/device.interface';
import { DeviceDetectorService } from './core/services/device-detector.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public deviceType$: Observable<Device> = this.deviceDetectorService.deviceType$;
  public pageClass: string = 'homepage';

  constructor(private deviceDetectorService: DeviceDetectorService, private router: Router) {}

  ngOnInit(): void {
    this.deviceDetectorService.init();
    this.initRouteChangeEvent();
  }

  private initRouteChangeEvent() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pageClass = this.getPageClass(event);
      }
    });
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
