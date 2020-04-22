import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myimage1: string = "assets/images/1.png";
  melodrama: string = "assets/images/melodrama.jpg"
  pimpButterfly: string = "assets/images/toPimpAButterfly.jpg"
  lemonade: string = "assets/images/lemonade.png"
  mbdtf: string = "assets/images/mbdtf.png"

}
