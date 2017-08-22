import { Injectable } from '@angular/core';
declare const $: any;


@Injectable()
export class AlertMsgService {

  alertMsg(from, align, type, message): any {
    // let from = 'top';
    // let align = 'right';
    // let type = 'info';
    $.notify({
      message: message,
    }, {
        placement: { from, align },
        offset: { x: 20, y: 35 },
        type,
        template: `<div class="alert alert-{0} alert-with-icon col-md-4">
          <i class="material-icons alert-icon">notifications</i>
          <button class="close" type="button" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>
          <span>{2}</span>
        </div>`
      });
  }
}

//导出AUTH_PROVIDERS 方便将其注入到应用其他部分
export var ALERT_PROVIDERS: Array<any> = [
  { provide: AlertMsgService, useClass: AlertMsgService }
];
