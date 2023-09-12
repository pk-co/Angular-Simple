import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
@Component({
  selector: 'app-u-header',
  templateUrl: './u-header.component.html',
  styleUrls: ['./u-header.component.scss']
})
export class UHeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private authService: AuthService, private storageService: StorageService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        //this.storageService.saveUser(null);
        this.router.navigate(['/login'])
      },
      error: err => {
        console.log(err);
      }
    });
    
    window.location.reload();
  }

}
