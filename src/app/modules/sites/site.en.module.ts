import { NgModule, LOCALE_ID } from '@angular/core';
import { SitesModule } from './sites.module';

/**
 * Should hold only internationalisation related stuff like translations
 *
 * Another good examples of what should be here are locales for MomentJS, Timezones
 *
 * Site module should be imported here
 */
@NgModule({
  imports: [
    SitesModule,
  ],
  providers: [
    // providing the value of czech translation data
    {provide: LOCALE_ID, useValue: 'en'},
  ],
})
export class SiteEnModule {}