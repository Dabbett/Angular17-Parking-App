import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})

export class ParkingComponent implements OnInit {

    masterService = inject(MasterService);
    parkingLotList: any [] = []
 
    ngOnInit(): void {
      this.getParkingLots();
    }

    getParkingLots() {
      this.masterService.getAllParkingLots().subscribe((res:any)=> {
          this.parkingLotList = res.data;
      })
    }
}
