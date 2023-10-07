import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BerkayRentaCarUI';

  berkay: any;
  ngOnInit(): void { 
    this.berkay = "Selam Berkay";
    console.log(this.berkay + 123) 
    
  }
  
}
