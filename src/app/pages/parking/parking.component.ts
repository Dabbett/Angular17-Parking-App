import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../service/master.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})

export class ParkingComponent implements OnInit {

    masterService = inject(MasterService);
    parkingLotList: any [] = []
    selectedParkingLot: any = {};

    parkingSpotList: number[] = [];
    selectedParkingSpotNo: number = 0;

    bookingObj: any = {
      "parkingId": 0,
      "prakingLotId": 0,
      "vehicleNo": "",
      "mobileNo": "",
      "inTime": "",
      "outTime": "",
      "parkingDate": new Date(),
      "spotNo": 0
    };
 
    ngOnInit(): void {
      this.getParkingLots();
    }

    getParkingLots() {
      this.masterService.getAllParkingLots().subscribe((res:any)=> {
          this.parkingLotList = res.data;
          this.selectedParkingLot = this.parkingLotList[0];
          debugger;
          this.createList(this.selectedParkingLot.totalParkingSpot);

      })
    }

  createList(totalSpot: number) {
    this.parkingSpotList = []
    for(let index = 0; index < totalSpot;index++){
      this.parkingSpotList.push(index)
    }
  }

    setSelectedParkingLot(data: any) {
      this.selectedParkingLot = data;
      this.createList(this.selectedParkingLot.totalParkingSpot)
    }

    openModal(parkingSpotNo: number) {
      this.selectedParkingSpotNo = parkingSpotNo;
      const modal = document.getElementById("bookModal");
      if(modal != null) {
        modal.style.display = 'block'
      }
    }

    closeModal() {
      const modal = document.getElementById("bookModal");
      if(modal != null) {
        modal.style.display = 'none'
      }
    }

    onBook() {
      debugger;
      this.bookingObj.prakingLotId = this.selectedParkingLot.parkingLotId;
      this.bookingObj.spotNo = this.selectedParkingSpotNo;
      this.masterService.bookSpot(this.bookingObj).subscribe((res:any) => {
        if(res.result) {
          alert("Booking Complete")
        } else{
          alert(res.message)
        }
      })
    }
}

