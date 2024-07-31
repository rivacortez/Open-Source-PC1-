import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {EducationalResourcesInterface} from "../Interface/EducationalResources.interface";


@Injectable({
  providedIn: 'root'
})
export class ElearningService {


  private apiUrl = 'https://mocki.io/v1/29a2ea1b-f99b-403d-9978-a3dc3b1e10a4';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<EducationalResourcesInterface[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        return response.results.map((item: any) => ({
          title: item.title,
          isbn: item.isbn,
          cover_url: item.cover_url,
          format: item.format,
          description: item.description,
          web_url: item.web_url
        }));
      })
    );
  }
}
