import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page:string = '1'
  modal:boolean = false

  constructor(private homeSer:HomeService) { }
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
    code: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
  })

  submit(){
    this.homeSer.postForm(this.form.value)
  }

}
