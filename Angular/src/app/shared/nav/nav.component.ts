import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  modal:boolean = false
  optionToggle: boolean = false

  OptionToggle(){
    this.optionToggle = !this.optionToggle
  }
  activeModal(){
    this.modal = true
    setTimeout(() => {
      this.modal = false
    }, 700);
  }

}
