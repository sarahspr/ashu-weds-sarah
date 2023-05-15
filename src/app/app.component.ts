import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('mainContainer') mainContainer: ElementRef;

  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private router: Router,
    private renderer: Renderer2
  ) {}

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
