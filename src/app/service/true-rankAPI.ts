import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrueRankAPIService {

  constructor(private http : HttpClient) {}

  getSummonerData(){
    return this.http.get('/api/getSummonerData')
  }

  sendSummonerName(summonerName: string){
    return this.http.post('/api/sendSummonerName', { 'summonerName': summonerName });
  }
}
