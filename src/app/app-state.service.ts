import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  // Number of images to determine if still loading
  private HERO_LOAD_IMG_COUNT = 2;
  // Number of images currently loaded
  private heroImageLoadCount = 0;
  private isHeroLoadig$ = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('NAV START', event);
      }
    });
  }

  public getIsHeroLoading$(): Observable<boolean> {
    return this.isHeroLoadig$.asObservable();
  }

  public setHeroImageLoaded($event: any): void {
    this.heroImageLoadCount += 1;

    if (this.heroImageLoadCount === this.HERO_LOAD_IMG_COUNT) {
      this.isHeroLoadig$.next(false);
    }
  }
}
