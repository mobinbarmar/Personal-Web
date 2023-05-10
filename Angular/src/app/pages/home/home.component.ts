import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  page:string = '1'
  modal:boolean = false

  selectPage(number:string){
    this.page = number
  }

  activeModal(){
    this.modal = true
    setTimeout(() => {
      this.modal = false
    }, 700);
  }

}
