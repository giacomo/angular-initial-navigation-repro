import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    @Input() foo = 1;
    @Output() output = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit(): void {
    }

    doClick() {
        this.output.emit('deine mutter');
    }
}
