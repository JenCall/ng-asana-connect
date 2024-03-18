import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileImgComponent } from '../profile/components/profile-img/profile-img.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [AppComponent, ProfileComponent, ProfileImgComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
