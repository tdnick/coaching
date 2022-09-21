import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-observable-promise',
  templateUrl: './observable-promise.component.html',
  styleUrls: ['./observable-promise.component.scss']
})
export class ObservablePromiseComponent implements OnInit {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://swapi.dev/api/people/1';
  peoplePromise: any;
  peopleObservable: any;

  ngOnInit(): void {
    // API call through Promise
    this.getPeoplePromise()
      .then(response => response.json())
      .then((data) => this.peoplePromise = JSON.stringify(data)) //sau error direct in then
      .catch(error => console.log(error));

    //catcher dupa fiecare then daca vrem particular
    //sau daca catcherul arunca eroare (nu o poate rezolva), executia sare la urmatorul catch

    // API call through Observable
    this.getPeopleObservable().subscribe(
      res => this.peopleObservable = JSON.stringify(res)
    )
  }

  getPeoplePromise(): Promise<any> {
    return fetch(this.apiUrl);
  }

  getPeopleObservable(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        catchError(
          () => throwError(() => new Error('error'))
        )
      );
  }

}
