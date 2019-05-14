import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'phone/:number', component: PhoneListComponent},
  {path:'create', component: UploadFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
