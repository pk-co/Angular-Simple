import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-home',
  templateUrl: './ad-home.component.html',
  styleUrls: ['./ad-home.component.scss']
})
export class AdHomeComponent implements OnInit {

  isLoading = true;
  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

  }

}
