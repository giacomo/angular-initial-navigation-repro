import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    counter = 0;
    public asyncGet$: Observable<any>;

    constructor(@Inject(LOCALE_ID) public localeId: string, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.asyncGet$ = this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    incrementCounter($event: any) {
        console.log('event value', $event);
        this.counter++;
    }
}
