import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'en',
        loadChildren: () => import('./modules/sites/site.en.module').then(m => m.SiteEnModule)
    },
    {
        path: 'de',
        loadChildren: () => import('./modules/sites/site.de.module').then(m => m.SiteDeModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
