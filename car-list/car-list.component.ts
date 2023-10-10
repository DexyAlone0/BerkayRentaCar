import { Component, OnInit } from '@angular/core';
import { CarDetailService } from "../car-detail.service"
import { CarDetailResponse } from './car-detail-response'; 

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  items: CarDetailResponse[] | undefined; 
  carId : number=0;
  constructor(private carDetailService: CarDetailService) 
  { 

  }

  ngOnInit() {
    this.carDetailService.getItemsAll().subscribe({
      next: (data: CarDetailResponse[]) => {
        // next
        this.items = data;
      },
      error: (error) => {
        // error
        console.error('API isteği başarısız:', error);
      },
      complete: () => {
        // complete
      }
    }); 
    console.log

  }
}
