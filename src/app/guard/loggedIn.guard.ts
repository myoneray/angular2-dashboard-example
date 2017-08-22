import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


import {AuthService}  from "../services/auth.service";

@Injectable()

export class LoggedInGuard implements CanActivate {

  // 将AuthService注入到构造方法中去 保证其保存到私有变量authService
  constructor(private authService: AuthService) { }

  // 我们通过isLoggedIn来检查用户的登录状态
  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}
