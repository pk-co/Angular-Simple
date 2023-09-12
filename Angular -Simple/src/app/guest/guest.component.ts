import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  isLoading = true
  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

  }

}
