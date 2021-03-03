import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {IonicModule} from '@ionic/angular';
import {LoginRoutingModule} from './login/login-routing.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import {StorageService} from "../services/storage.service";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    TabsPageModule,
    LoginRoutingModule
  ],
  providers: [FingerprintAIO, StorageService]
})
export class LoginModule { }
