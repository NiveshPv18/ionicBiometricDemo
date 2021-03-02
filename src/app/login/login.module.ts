import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {IonicModule} from '@ionic/angular';
import {LoginRoutingModule} from './login/login-routing.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    TabsPageModule,
    LoginRoutingModule
  ],
  providers: [FingerprintAIO]
})
export class LoginModule { }
