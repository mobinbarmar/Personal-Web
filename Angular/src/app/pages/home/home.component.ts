import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page:string = '1'
  modal:boolean = false
  postModal:boolean = false
  postMessage:string = 'it\'s posted!'

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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  submit(){
    if(this.form.valid){
      this.homeSer.postForm(this.form.value).subscribe((res) => {
        this.postMessage = 'It\'s posted!'
        this.postModal = true
        setTimeout(() => {
          this.postModal = false
        }, 700);
      }, (err) => {
        console.log(err)
        this.postMessage = 'There is a problem'
        this.postModal = true
        setTimeout(() => {
          this.postModal = false
        }, 700);
      })
    }else{
      this.postMessage = 'Please fill all blanks!'
        this.postModal = true
        setTimeout(() => {
          this.postModal = false
        }, 700);
    }
  }

}
