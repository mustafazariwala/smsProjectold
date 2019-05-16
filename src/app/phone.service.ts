import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  private listUpdated = new Subject<{}>();
  private numberUpdated = new Subject<{}>();

  ELEMENT_DATA;

  BACK_URL = 'http://localhost:8080'

  getPhone(phoneNumber){
    
    this.http.get(this.BACK_URL + '/api/' + phoneNumber)
    .subscribe(data =>{
      this.ELEMENT_DATA = data
      console.log(data)
      this.listUpdated.next(data)
    })
    
  }
  createPhone(number: string, location: string, shortCode: string){
    const data = {number: number, location: location, shortCode: shortCode ,status: 'Active'}
    console.log(data)
    this.http.post(this.BACK_URL + '/create', data).subscribe(response => {
      console.log(response)
    })
  }

  getNumber(){
    this.http.get(this.BACK_URL + '/phoneList').subscribe(response => {
      this.numberUpdated.next(response)
    })

  }
  getNumberUpdateListener(){
    return this.numberUpdated.asObservable()
  }

  

  getPhoneUpdateListener(){
    return this.listUpdated.asObservable()
  }
}
