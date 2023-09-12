import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private authService: AuthService, private storageService: StorageService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


  logout(): void {
    // this.authService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
    //     this.storageService.clean();

    //     this.router.navigate(['/login'])
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });
    this.router.navigate(['/login'])
      //this.storageService.saveUser(null);
    // window.location.reload();
  }
}
