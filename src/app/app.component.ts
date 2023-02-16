import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { HomePage } from 'src/pages/home';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, firebase: Firebase) {
    platform.ready().then(() => {

      firebase.getToken().then((token: any) => console.log(token)).catch((err: any) => console.log(err));
      firebase.onNotificationOpen().subscribe((data: any) => {
        console.log(data);
      }, (err: any) => console.log(err));
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
