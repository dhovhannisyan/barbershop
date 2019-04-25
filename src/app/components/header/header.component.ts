import { Component, OnInit } from '@angular/core';

// import { baceSvgPath } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   svgPath: string; 

  constructor() { 

  }

  ngOnInit() {
  	this.svgPath = './assets/svg/';
  }

}
