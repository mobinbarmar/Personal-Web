import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page:string = '1'
  modal:boolean = false

  constructor() { }
  ngOnInit(): void {
  }

  selectPage(number:string){
    this.page = number
  }
  activeModal(){
    this.modal = true
    setTimeout(() => {
      this.modal = false
    }, 700);
  }

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
  })

}
