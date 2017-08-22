import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { AlertMsgService} from '../../services/alertmsg.service';
import { RouterModule, Router, Routes } from '@angular/router';

// import { routing } from '../../app.routes';
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  email: string;
  password: string;

  authService: AuthService;
  alertMsgService: AlertMsgService;
  router: Router;
  constructor(private authService_: AuthService, private alertMsgService_: AlertMsgService, route_: Router) {
    this.authService = authService_;
    this.alertMsgService = alertMsgService_;
    this.router = route_;
  }

  ngOnInit() {
  }

  // 登陆
  login(): any {
    if (this.authService.login(this.name, this.password)) {
      //跳转到控制台
      this.router.navigate(['/dashboard']);
    } else {
      //错误提示
      this.alertMsgService.alertMsg('top', 'right', 'danger', '登录失败！');
    }
  }

}
