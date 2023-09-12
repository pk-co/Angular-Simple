import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  tel: number;
  casuse: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', tel: 1.0079, casuse: 'H'},
  {position: 2, name: 'Helium', tel: 4.0026, casuse: 'He'},
  {position: 3, name: 'Lithium', tel: 6.941, casuse: 'Li'},
  {position: 4, name: 'Beryllium', tel: 9.0122, casuse: 'Be'},
  {position: 5, name: 'Boron', tel: 10.811, casuse: 'B'},
  {position: 6, name: 'Carbon', tel: 12.0107, casuse: 'C'},
  {position: 7, name: 'Nitrogen', tel: 14.0067, casuse: 'N'},
  {position: 8, name: 'Oxygen', tel: 15.9994, casuse: 'O'},
  {position: 9, name: 'Fluorine', tel: 18.9984, casuse: 'F'},
  {position: 10, name: 'Neon', tel: 20.1797, casuse: 'Ne'},
];


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'tel', 'casuse',];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
