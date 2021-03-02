import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public username = '';
  constructor(private router: Router, private faio: FingerprintAIO) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // do operations on routing change
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
                this.router.navigateByUrl('tabs').then();
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

}
