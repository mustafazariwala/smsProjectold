import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  private listUpdated = new Subject<{}>();
  private numberUpdated = new Subject<{}>();

  ELEMENT_DATA;

  getPhone(){
    this.http.get('/api/numbers')
    .subscribe(data =>{
      this.ELEMENT_DATA = data
      console.log(data)
      this.listUpdated.next(data)
    })
    
  }
  createPhone(number: string, location: string){
    const data = {number: number, location: location, status: 'Active'}
    console.log(data)
    this.http.post('/create', data).subscribe(response => {
      console.log(response)
    })
  }

  getNumber(){
    this.http.get('/phoneList').subscribe(response => {
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
