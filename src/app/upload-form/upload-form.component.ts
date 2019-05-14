import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  constructor(private phoneService: PhoneService) { }

  onAddPost(form: NgForm){
    this.phoneService.createPhone(form.value.number, form.value.location)
  }

  

  ngOnInit() {
  }

}
