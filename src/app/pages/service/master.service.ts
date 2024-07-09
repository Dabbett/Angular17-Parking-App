import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string= 'https://freeapi.miniprojectideas.com/api/ParkingSpotBooking/'
  constructor(private http:HttpClient) {}

  getAllParkingLots() {
    return this.http.get(`${this.apiUrl}GetAllParkingLots`)
  }

  bookSpot(obj: any) {
    return this.http.post(`${this.apiUrl}BookSpot`, obj)
  }

  deleteLot(name: string) {
    return this.http.delete(`${this.apiUrl}DeleteParkingLotbyId`)
  }
}
