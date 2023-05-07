import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() img:string = '../../../assets/img/icons8-info-384 1.png'
  @Input() text:string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos reprehenderit blanditiis natus deleniti provident modi aut accusamus nobis fugiat mollitia molestias repellendus, distinctio sapiente, et accusantium sint quasi vero?'

}
