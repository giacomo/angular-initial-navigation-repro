import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './compoments/registration/registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [RegistrationComponent],
    exports: [
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
