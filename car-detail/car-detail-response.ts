export class CarDetailResponse {
carId : number;
brandName : string;
fuelTypeName : string;
gearTypeName: string;
engineCapacityName : string;

constructor(data: any){
this.carId = data.carId | data.Id;
this.brandName = data.brandName;
this.fuelTypeName = data.fuelTypeName;
this.gearTypeName = data.gearTypeName;
this.engineCapacityName = data.engineCapacityName;
}
}
