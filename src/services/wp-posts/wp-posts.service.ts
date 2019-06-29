import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Config } from '../../config'
import { Circuit, Slide } from 'src/app/Models';

export enum WpApiBase {
  Jobs = "jobs/",
  Circuits = "circuits/",
  Posts = "posts/",
  Slides = "slides/",
}

@Injectable({
  providedIn: 'root'
})
export class WpPostsService {
  private wpUrl: string = Config.baseUrl;
  constructor(
    private http: HttpClient
  ) {
  }

  getRequestedUrl(base: string) {
    return `${this.wpUrl}${base}?_embed`
  }

  getAll(base: string): Observable<any> {
    let url = this.getRequestedUrl(base);
    return this.get(url)
  }

  getBySlug(base: string, postSlug: any) {
    let url = this.getRequestedUrl(base) + "&slug=" + postSlug;
    return this.get(url);
  }

  private get(url: any): Observable<any> {
    return this.http.get(url)
  }

  GetParcoursBySlug(postSlug: any): Observable<Circuit> {

    return this.getBySlug(WpApiBase.Circuits, postSlug)
      .pipe(
        map(
          (data: Object[]) => Circuit.fromJson(data[0])
        )
      );

  }

  GetSliders(): Observable<Slide[]> {

    return this.getAll(WpApiBase.Slides)
      .pipe(
        map(
          (data: Object[]) => (data.map((d, i) => Slide.fromJson(data[i])
          )
          )
        )
      );

  }


}
