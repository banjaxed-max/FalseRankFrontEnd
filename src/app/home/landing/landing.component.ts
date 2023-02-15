import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TrueRankAPIService } from 'src/app/service/true-rankAPI';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers: [TrueRankAPIService]
})
export class LandingComponent implements OnInit {
  
  nameInput : string = '';
  
  summonerName = this.nameInput

  constructor(private service : TrueRankAPIService) { 
    
  }

  ngOnInit(){
    
  }

  onSubmit() {
    this.sendDataToAPI();
  }
    

  sendDataToAPI() {
    this.service.sendSummonerName(this.summonerName).subscribe()
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.service.getSummonerData().subscribe((response) => {
      console.log(response)
    }, (error) => {
      console.log('Error is ', error);
    })

  }
}
