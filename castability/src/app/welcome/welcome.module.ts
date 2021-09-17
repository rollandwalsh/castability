import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { HeaderComponent } from '../header/header.component';
import { WelcomePage } from './welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [
    WelcomePage,
    HeaderComponent
  ]
})
export class WelcomePageModule {}
