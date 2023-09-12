import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDailogComponent } from './confirm-dailog/confirm-dailog.component';
const USER_DATA = [
  {
    id: 1,
    name: 'Kumara Jayalath',
    occupation: '',
    dateOfBirth: '1984-05-05',
    age: 36,
  },
  // {
  //   id: 2,
  //   name: 'Muhi Masri',
  //   occupation: 'Developer',
  //   dateOfBirth: '1992-02-02',
  //   age: 28,
  // },
  // {
  //   id: 3,
  //   name: 'Peter Adams',
  //   occupation: 'HR',
  //   dateOfBirth: '2000-01-01',
  //   age: 20,
  // },
  // {
  //   id: 4,
  //   name: 'Lora Bay',
  //   occupation: 'Marketing',
  //   dateOfBirth: '1977-03-03',
  //   age: 43,
  // },
];

const COLUMNS_SCHEMA = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'name',
    type: 'text',
    label: 'Full Name',
  },
  {
    key: 'occupation',
    type: 'text',
    label: 'Occupation',
  },
  {
    key: 'dateOfBirth',
    type: 'date',
    label: 'Date of Birth',
  },
  {
    key: 'age',
    type: 'number',
    label: 'Age',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];


@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.scss']
})
export class AdDashboardComponent implements OnInit {

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addRow() {
    const newRow = {
      id: Date.now(),
      name: '',
      occupation: '',
      dateOfBirth: '',
      age: 0,
      isEdit: true,
    };
    this.dataSource = [newRow, ...this.dataSource];
  }

  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  removeSelectedRows() {
    this.dialog
      .open(ConfirmDailogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.dataSource = this.dataSource.filter((u: any) => !u.isSelected);
        }
      });
  }

}
