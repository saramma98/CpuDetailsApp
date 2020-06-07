import { Component, OnInit } from '@angular/core';

import{HardwareDetailsService} from '../service/hardware-details.service';
import{Content} from '../class/Content'

@Component({
  selector: 'app-cpu-details',
  templateUrl: './cpu-details.component.html',
  styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

  cpudetails:any;
  batterydetails:any;

  CpuData:Content[]=[];
  BatteryData:Content[]=[];


  constructor(private hardwareDetailsService : HardwareDetailsService) { }

  ngOnInit(): void {

    this.getHWDetails();
  }
 
  getHWDetails(){

    this.hardwareDetailsService.getHardwareDetails().subscribe((response:any)=>{
  this.display(response);
    })

  
  }

  display(res){
    var KeyCompo=[];

    this.cpudetails= res.cpuData;
    this.batterydetails= res.batteryData;

    for(let c in this.cpudetails){
      const cpuD :Content={
        'name': c,
        'value': this.cpudetails[c]
      }

      this.CpuData.push(cpuD);
    }

    for(let b in this.batterydetails){
      const battD :Content={
        'name': b,
        'value': this.batterydetails[b]
      }

      this.BatteryData.push(battD);
    }

  }  //end of display

}