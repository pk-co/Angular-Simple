import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  isLoading = true;

  constructor() { }

  ngOnInit(): void {

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);


  }



}


