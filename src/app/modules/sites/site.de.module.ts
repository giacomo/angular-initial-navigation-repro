import { NgModule, LOCALE_ID, TRANSLATIONS } from '@angular/core';
import { SitesModule } from './sites.module';

import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDe, 'de');

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
    // providing the value of german translation data
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: TRANSLATIONS, useValue: '../../../locales/messages.de.xlf'},
  ],
})
export class SiteDeModule {}