import { Component } from '@angular/core';
import {  ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { MouseEvent } from '@agm/core';
import {} from '@types/googlemaps';
import { Options } from 'ng5-slider';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 12;

  public origin: any;
public destination: any;

 
  map: any;
  marker: Object;
  directionsRenderer: any;
  directionsService: any;
  @ViewChild('map') mapRef: ElementRef;
    @ViewChild('start') start: ElementRef;
    @ViewChild('end') end: ElementRef;

  // initial center position for the map
  lat: number = 12.9716;
  lng: number = 77.5946;

  value: number = 0.5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 1, legend: '7AM'},
      {value: 2, legend: '8AM'},
      {value: 3, legend: '9AM'},
      {value: 4, legend: '10AM'},
      {value: 5, legend: '11AM'},
      {value: 6, legend: '12PM'},
       {value: 7, legend: '1PM'},
        {value: 8, legend: '2PM'},
         {value: 9, legend: '3PM'},
          {value: 10, legend: '4PM'},
           {value: 11, legend: '5PM'},
 {value: 12, legend: '6PM'},
  {value: 13, legend: '7PM'},
     
    ]
  };
    
  circles=[
  {
    "lat": 12.920984,
    "lon": 77.584908,
    "city": "Jayanagar 5th Block, Bengaluru, India",
    "idx": 6688,
    "stamp": 1589949000,
    "pol": "pm25",
    "x": "11276",
    "aqi": "-",
     "color":"blue",
    "tz": "+05:30",
    "utime": "2020-05-20 10:00:00",
    "img": "_8_SzckrNS0_MKS0q1fdKrEzMS0xPLFIwLclQcMrJT84GAA",
    "maqi":[40,50,60,70,80,90,100,110,130,140,150,160,170]
  },
  {
    "lat": 12.917348,
    "lon": 77.622813,
    "city": "Silk Board, Bengaluru, India",
    "idx": 4336,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "11293",
    "aqi": "261",
     "color":"blue",
    "tz": "+05:30",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrNS0_MKS0q1Q_OzMlWcMpPLEoBAA",
     "maqi":[140,150,160,170,180,190,200,210,230,240,250,260,270]
  },
  {
    "lat": 12.9773472,
    "lon": 77.570697222222,
    "city": "City Railway Station, Bangalore, India",
    "idx": 6687,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "8686",
    "aqi": "58",
     "color":"blue",
    "tz": "+05:30",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrMS0_MyS9K1XfOLKlUCErMzClPrFQILkksyczPAwA","maqi":[80,90,160,170,180,190,200,210,230,240,250,260,270]
  },
  {
    "lat": 12.938539,
    "lon": 77.5901,
    "city": "Hombegowda Nagar, Bengaluru, India",
    "idx": 4320,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "11270",
    "aqi": "48",
     "color":"blue",
    "tz": "+05:30",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrNS0_MKS0q1ffIz01KTc8vT0lU8EtMTywCAA","maqi":[40,40,40,40,42,43,44,45,46,47,48,49,50]
  },
  {
    "lat": 12.951913,
    "lon": 77.539784,
    "city": "Bapuji Nagar, Bengaluru, India",
    "idx": 4352,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "11312",
    "aqi": "65",
     "color":"blue",
    "tz": "+05:30",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrNS0_MKS0q1XdKLCjNylTwS0xPLAIA"
    ,"maqi":[200,140,40,40,42,143,344,345,246,247,48,149,150]
  },
  {
    "lat": 12.93890556,
    "lon": 77.69727222,
    "city": "BWSSB Kadabesanahalli, Bengaluru, India",
    "idx": 4390,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "12441",
    "aqi": "86",
    "tz": "+05:30",
     "color":"blue",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrNS0_MKS0q1XcKDw52UvBOTElMSi1OzEvMSMzJyQQA"
    ,"maqi":[410,140,240,340,142,143,144,145,146,147,248,249,250]
  },
  {
    "lat": 13.0339,
    "lon": 77.51321111,
    "city": "Peenya, Bangalore, India",
    "idx": 6659,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "3758",
    "aqi": "95",
     "color":"blue",
    "tz": "+05:30",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrMS0_MyS9K1Q9ITc2rTAQA"
    ,"maqi":[240,140,340,440,142,443,144,145,416,417,418,419,510]
  },
  {
    "lat": 13.029152,
    "lon": 77.585901,
    "city": "Hebbal, Bengaluru, India",
    "idx": 4363,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "11428",
     "color":"blue",
    "aqi": "52",
    "tz": "+05:30",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrNS0_MKS0q1fdITUpKzAEA"
     ,"maqi":[240,140,340,440,142,443,144,145,416,417,418,419,510]
  },
  {
    "lat": 12.91281111,
    "lon": 77.60921944,
    "city": "BTM, Bangalore, India",
    "idx": 4927,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "8190",
    "aqi": "84",
    "tz": "+05:30",
     "color":"blue",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrMS0_MyS9K1XcK8QUA" ,"maqi":[240,140,340,440,142,443,144,145,416,417,418,419,510]
  },
  {
    "lat": 12.9916694,
    "lon": 77.545830555556,
    "city": "SaneguravaHalli, Bangalore, India",
    "idx": 4295,
    "stamp": 1590028200,
    "pol": "pm25",
    "x": "8687",
    "aqi": "43",
    "tz": "+05:30",
    "color":"blue",
    "utime": "2020-05-21 08:00:00",
    "img": "_8_SzckrMS0_MyS9K1Q9OzEtNLy1KLEv0SMzJyQQA" ,"maqi":[240,140,340,440,142,443,144,145,416,417,418,419,510]
  }
];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  valueChange(step)
  {
    this.circles.forEach(obj=> {
            
            if(obj.maqi[step-1]>10 && obj.maqi[step-1]<=100)
            {
              obj.color="green";
            }
             if(obj.maqi[step-1]>100 && obj.maqi[step-1]<=200)
            {
              obj.color="blue";
            }
             if(obj.maqi[step-1]>100 && obj.maqi[step-1]<=500)
            {
              obj.color="#800080";
            }

         });

  }

  onMapReady(mapInstance) {
    //let trafficLayer = new google.maps.TrafficLayer();
    //trafficLayer.setMap(mapInstance);
}
ngOnInit() {
  //this.getDirection();
   this.directionsRenderer = new google.maps.DirectionsRenderer();
      this.directionsService = new google.maps.DirectionsService();
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 12,
        center: new google.maps.LatLng(12.9716, 77.5946)
      });
      this.directionsRenderer.setMap(this.map);
      this.directionsRenderer.setPanel(document.getElementById('right-panel'));
        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

        var onChangeHandler = function() {
          //this.calculateAndDisplayRoute();
           let start = this.start.nativeElement;
        let end = this.end.nativeElement;
        this.directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'DRIVING',
		  provideRouteAlternatives:true
        }, function(response, status) {
          if (status === 'OK') {
           this.directionsRenderer.setDirections(response);
		 
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);

     
}

  calculateAndDisplayRoute() {
        let start = this.start.nativeElement;
        let end = this.end.nativeElement; this.directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'DRIVING',
		  provideRouteAlternatives:true
        }, function(response, status) {
          if (status === 'OK') {
           this.directionsRenderer.setDirections(response);
		 
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
 
getDirection() {
 
  this.origin = { lat: 17.4422778, lng: 78.4688006 };
  this.destination = { lat:  12.9993221, lng: 77.5285469 };
 
  // this.origin = 'Taipei Main Station';
  // this.destination = 'Taiwan Presidential Office';
}
  cclick(city){
   // alert(city);
  }
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
