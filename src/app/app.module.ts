import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule,  MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatTableModule, MatDividerModule, MatListModule, MatProgressSpinnerModule, MatButtonToggleModule, MatSelectModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneCardComponent } from './phone-card/phone-card.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { HttpClientModule } from '@angular/common/http';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhoneListComponent,
    PhoneCardComponent,
    HomeComponent,
    ContactComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
