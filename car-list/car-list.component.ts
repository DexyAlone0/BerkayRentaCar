import { Component, OnInit } from '@angular/core';
import { CarDetailService } from '../car-detail.service';
import { CarDetailResponse } from './car-detail-response'; 

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  items: CarDetailResponse[] | undefined; 

  constructor(private carDetailService: CarDetailService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.carDetailService.getItemsAll().subscribe({
      next: (data: CarDetailResponse[]) => {
        this.items = data;
      },
      error: (error) => {
        console.error('API isteği başarısız:', error);
      },
      complete: () => {
        
      }
    });
  }
}
