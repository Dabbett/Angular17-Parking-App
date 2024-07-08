import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string= 'https://freeapi.miniprojectideas.com/api/ParkingSpotBooking/'
  constructor() { }
}
