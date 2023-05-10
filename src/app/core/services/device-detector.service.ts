import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, Observable } from 'rxjs';
import { Device } from '../models/device.interface';
import { BREAKPOINTS } from '../config';

/**
 * This service checks for window resize and broadcast an event when window size changes b/w -
 * 'mobile' | 'tablet' | 'desktop'
 */
@Injectable()
export class DeviceDetectorService {
  private deviceTypeSubject$: BehaviorSubject<Device> = new BehaviorSubject<Device>(
    this.getDeviceTypeForWidth(window.innerWidth)
  );

  public init(): void {
    fromEvent(window, 'resize')
      .pipe(debounceTime(150))
      .subscribe((event: Event) => {
        const innerWidth = (event.target as Window).innerWidth;
        const deviceType = this.getDeviceTypeForWidth(innerWidth);
        this.deviceTypeSubject$.next(deviceType);
      });
  }

  public get deviceType$(): Observable<Device> {
    return this.deviceTypeSubject$.asObservable();
  }

  private getDeviceTypeForWidth(width: number): Device {
    if (width < BREAKPOINTS.mobile) {
      return Device.Mobile;
    } else if (width > BREAKPOINTS.mobile && width < BREAKPOINTS.desktop) {
      return Device.Tablet;
    } else {
      return Device.Desktop;
    }
  }
}
