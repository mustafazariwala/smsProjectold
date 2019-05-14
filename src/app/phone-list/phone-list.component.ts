import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PhoneService } from '../phone.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})



export class PhoneListComponent implements OnInit {

  constructor(public route: ActivatedRoute, private phoneService: PhoneService) { }

  Element_Data
  dataSource

  currentPhone;

  phoneList;

  number = 5;


  phoneGetter = function () {
    this.Element_Data =  this.phoneService.getPhone()
    this.phoneService.getPhoneUpdateListener().subscribe( data => {
      this.Element_Data = data
      console.log(this.Element_Data)
      this.dataSource = this.Element_Data;

    })
  }

  onReload(){
    console.log('Hi')
  }

  ngOnInit() {
   
    this.phoneGetter()
    


    this.phoneService.getNumber()
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.currentPhone = paramMap.get('number')      
      console.log(this.currentPhone)
    })

    this.phoneService.getNumber()
    this.phoneService.getNumberUpdateListener().subscribe(response=> {
      this.phoneList = response
      
    })

  
  
  }

  timer = function () {
    const t = setInterval(() => {
      this.number--
      console.log(this.number)
      if(this.number === 0){
        this.number = 5;
        clearInterval(t)
        this.phoneGetter()       
      }
    },1000)
  }


  displayedColumns : string[] = ['from', 'body', 'time']

}


