import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private testSer:TestService) {
    
  }

  test(){
    this.testSer.test().subscribe((res) => {
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.test()
    
  }
}
