import { Component, OnInit, Input } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { RouterModule, Router, Routes } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;

  router: Router;

  constructor(private authService: AuthService, router_: Router) {

    this.router = router_;
  }

  ngOnInit() {
  }

  menuClick() {
    // document.getElementById('main-panel').style.marginRight = '260px';
  }


  // 登出返回false
  logout(): any {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
