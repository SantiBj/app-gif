import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IGif, IGitApi, responseGifs } from 'src/app/models/gif.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://api.giphy.com/v1/gifs/search?api_key=6NZ7dl4A8uslRAkFP21dvQpz7tJidQs0&limit=9&q=';

  constructor(private _httpClient: HttpClient) { }

  public getGifs(search:string):Observable<IGif[]>{
    return this._httpClient.get<responseGifs>(`${this.baseUrl}${search}`)
    .pipe(
      map((response:responseGifs)=>{
        if (response.data && Array.isArray(response.data)){
          return response.data.map((item:IGitApi)=>{ 
            return {
              id: item.id,
              title: item.title,
              url: item.images.original.url
            }
          })
        }else {
          return [];
        }
      })
    );
  }
}
