import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PhoneService } from '../phone.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})



export class PhoneListComponent implements OnInit, OnDestroy {

  constructor(public route: ActivatedRoute, private phoneService: PhoneService) { }

  Element_Data
  dataSource

  currentPhone;

  phoneList;

  subscription1 = new Subscription;

  number = 0;


  phoneGetter = function () {
    this.Element_Data =  this.phoneService.getPhone(this.currentPhone)
    this.subscription1 = this.phoneService.getPhoneUpdateListener().subscribe( data => {
      this.number = 600;
      this.Element_Data = data
      console.log(this.Element_Data)
      this.dataSource = this.Element_Data;

    })
  }

  onReload(){
    this.phoneGetter()
  }

  onSideClick(phoneNumber){
    this.subscription1.unsubscribe()
    this.Element_Data = null;
    this.currentPhone = phoneNumber
    this.phoneService.getPhone(phoneNumber)
    this.phoneService.getPhoneUpdateListener().subscribe( data => {
      this.number = 600;
      this.Element_Data = data
      console.log(this.Element_Data)
      this.dataSource = this.Element_Data;

    })
    
  }

  ngOnInit() {
   
    
    


    this.phoneService.getNumber()
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.currentPhone = paramMap.get('number')      
      console.log(this.currentPhone)
    })

    this.phoneGetter()

    this.phoneService.getNumber()
    this.phoneService.getNumberUpdateListener().subscribe(response=> {
      this.phoneList = response
      
    })


    this.timer()

  
  
  }

  timer = function () {
    const t = setInterval(() => {
      this.number--
      if(this.number === 0){
        clearInterval(t)
        this.phoneGetter()
        this.timer()    
      }
    },1000)
  }


  displayedColumns : string[] = ['from', 'body', 'time']

  onCopy(phonenumber){
    console.log(phonenumber)
    phonenumber.select()
    document.execCommand('copy');
    phonenumber.setSelectionRange(0, 0);

  }



  ngOnDestroy() {
    
    this.subscription1.unsubscribe()

  }

}
