import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  games: any;
  constructor(private http: HttpClient) { }

  public getGames(){
    return this.http.get('http://starlord.hackerearth.com/gamesarena');
  }

}
