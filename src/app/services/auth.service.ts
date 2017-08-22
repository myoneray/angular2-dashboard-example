import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  // 登录成功 将用户名存储到localStorage
  login(user: string, password: string): boolean {
    if (user == '1' && password == '1') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  // 登出时移除localStorage中的用户信息
  logout(): any {
    localStorage.removeItem('username');
  }

  // 获取当前的登录用户 或者返回null
  getUser(): any {
    return localStorage.getItem('username');
  }

  //调用getUser方法在有用户名时返回true
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

//导出AUTH_PROVIDERS 方便将其注入到应用其他部分
export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
