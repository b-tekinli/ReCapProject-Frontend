import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = {
    carId: 1,
    carName: 'Audi',
    brandId: 1,
    dailyPrice: 600
  };

  car2 = {
    carId: 2,
    carName: 'Mercedes',
    brandId: 1,
    dailyPrice: 600
  };

  car3 = {
    carId: 3,
    carName: 'BMW',
    brandId: 1,
    dailyPrice: 600
  };

  car4 = {
    carId: 4,
    carName: 'Ford',
    brandId: 1,
    dailyPrice: 600
  };

  car5 = {
    carId: 5,
    carName: 'Toyota',
    brandId: 1,
    dailyPrice: 600
  };

  cars = [
    this.car1, 
    this.car2, 
    this.car3, 
    this.car4, 
    this.car5
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
