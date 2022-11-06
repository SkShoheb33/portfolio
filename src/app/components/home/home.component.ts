import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= ""
 
  constructor() {
    
    const quotes = [
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "The way to get started is to quit talking and begin doing.",
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      "If life were predictable it would cease to be life, and be without flavor."
    ];
    this.title=quotes[0];
    setInterval(() => {
      this.title = quotes[Math.floor(Math.random()*quotes.length)] ;
    }, 5000);
   }

  ngOnInit(): void {  }
}
