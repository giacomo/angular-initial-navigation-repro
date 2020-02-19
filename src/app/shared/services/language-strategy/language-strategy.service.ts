import { Injectable, Injector } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageStrategyService {

    constructor(private injector: Injector) {}

    boot() {
        const router = this.injector.get(Router);
        router.events.pipe(
            tap((route) => console.log(route.constructor.name)),
            filter(url => url instanceof RoutesRecognized)
        ).subscribe((route: RoutesRecognized) => {
            if (route.urlAfterRedirects === '/') {
                console.log('==========> redirect to new route');
                return router.navigate(['/en']);
            }
        });
    }
}
