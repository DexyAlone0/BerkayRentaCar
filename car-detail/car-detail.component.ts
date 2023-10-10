import { Component, Input, OnInit } from '@angular/core';
import { CarDetailService } from "../car-detail.service"
import { CarDetailResponse } from './car-detail-response'; 

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {

  item: CarDetailResponse | undefined; 
  carId : number=0;
  constructor(private carDetailService: CarDetailService) 
  { 

  }

  ngOnInit() {
    this.carDetailService.getItems().subscribe({
      next: (data: CarDetailResponse) => {
        // next
        this.item = data;
        console.log(this.item?.carId);
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
  getByCarId(carId: number){
    this.carDetailService.getItemsById(carId).subscribe({
      next: (data: CarDetailResponse) => {
        // next
        this.item = data;
        console.log(this.item?.carId);
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
