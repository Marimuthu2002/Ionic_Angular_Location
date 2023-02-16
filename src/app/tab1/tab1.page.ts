import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    items: any;
    Position: any;
    public lat: any;
    public lng: any;
    public click: any;
  
    public ngOnInit(): void {
      this.getLoc();
    }
    getLoc() {
      var latDes = 11.158193;
      var longDes = 76.9527614;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          if (position) {
            console.log("Latitude: " + position.coords.latitude +
              "Longitude: " + position.coords.longitude);
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            var url = "https://www.google.com/maps/dir/?api=1&";
            var origin = "origin=" + this.lat + "," + this.lng;
            var destination = "&destination=" + latDes + "," + longDes;
            var newUrl = new URL(url + origin + destination);
            this.click = newUrl;
            console.log(this.lat);
            console.log(this.lat);
            console.log(this.click);
          }
        },
          (error: any) => console.log(error));
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
  }
