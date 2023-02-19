import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { TrueRankAPIService } from 'src/app/service/true-rankAPI';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule],
  providers: [TrueRankAPIService]
})
export class LandingComponent {
  
  nameInput : string = '';
  
  summonerName = this.nameInput

  constructor(private service : TrueRankAPIService) { 
    
  }

  onSubmit() {
    this.sendDataToAPI();
  }
    

  sendDataToAPI() {
    this.service.sendSummonerName(this.summonerName).subscribe((response) => {
      console.log(response)
    })
  
  }
}
