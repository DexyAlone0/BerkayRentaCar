import { Component, Input, OnInit } from '@angular/core';
import { CarDetailService } from '../car-detail.service';
import { CarDetailResponse } from './car-detail-response';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  @Input() carId: number; 

  item: CarDetailResponse | undefined;

  constructor(private carDetailService: CarDetailService) { }

  ngOnInit() {
    this.getByCarId(this.carId);
  }

  getByCarId(carId: number) {
    this.carDetailService.getItemsById(carId).subscribe({
      next: (data: CarDetailResponse) => {
        this.item = data;
        console.log(this.item?.carId);
      },
      error: (error) => {
        console.error('API isteği başarısız:', error);
      },
      complete: () => {
        // complete
      }
    });
  }
}
