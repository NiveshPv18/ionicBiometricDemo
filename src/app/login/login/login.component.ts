import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mobile: boolean;
  constructor(private router: Router, private faio: FingerprintAIO, private storage: StorageService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // do operations on routing change
        this.faio.isAvailable().then((result) => {
          this.mobile = ['finger', 'biometric', 'face'].includes(result);
        }).catch((error) => {
          this.mobile = false;
        })
      }
    });
  }

  ngOnInit() {}

  checkFingerPrintAuth() {
    this.faio.isAvailable().then(result => {
      if (['finger', 'biometric', 'face'].includes(result)) {
        this.faio.show({
          title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
          subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
          description: 'Please authenticate', // optional | Default: null
          fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
                                             // When disableBackup is true defaults to "Cancel"
          disableBackup: true,  // optional | default: false
        })
            .then((res: any) => {
              if(res) {
                this.logIn()
              }
            })
            .catch((error: any) => {
              alert(error)
            });
      } else {
        return false;
      }
    });
  }

  logIn() {
    this.router.navigateByUrl('tabs').then();
    this.storage.setItem('loggedIn', JSON.stringify(true));
  }

}
