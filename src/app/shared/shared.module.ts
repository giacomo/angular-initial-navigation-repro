import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
    declarations: [RegistrationComponent, PostCardComponent],
    exports: [
        RegistrationComponent,
        PostCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
