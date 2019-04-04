import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  Version_Number: string="0.0";
  
  datetime: string="__DateTime_str__";
  
  constructor() { 
    setInterval(() =>{
      let currdate = new Date(); 

      this.Version_Number = 'v1.0';
      this.datetime = currdate.toDateString() + currdate.toLocaleTimeString();
    },1000)
  }

  ngOnInit() {
  }

}
