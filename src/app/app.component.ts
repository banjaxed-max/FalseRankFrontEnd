import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './home/landing/landing.component';
import { TrueRankAPIService } from './service/true-rankAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AppRoutingModule, LandingComponent, HttpClientModule],
  providers: [TrueRankAPIService]
})
export class AppComponent {
  title = 'True Rank';
}
