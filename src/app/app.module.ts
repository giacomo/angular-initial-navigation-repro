import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageStrategyService } from './shared/services/language-strategy/language-strategy.service';


export function bootstrap_listener(languageStrategyService: LanguageStrategyService) {
    return () => languageStrategyService.boot();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: bootstrap_listener,
            deps: [LanguageStrategyService],
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
