import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Number } from '../phone.model';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.css']
})
export class PhoneCardComponent implements OnInit {

  constructor(private phoneService: PhoneService) { }

  data ;
  isLoading = false;

  ngOnInit() {

    this.phoneService.getNumber()
    this.phoneService.getNumberUpdateListener().subscribe(response=> {
      this.data = response
      if(response){
        this.isLoading = true
      }
      console.log(this.data)
    })  
  }

  



}
