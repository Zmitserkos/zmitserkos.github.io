import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class ShareModalContext extends BSModalContext {
  public stateLink: string;
  public location: string;
}

@Component({
  selector: 'modal-content',
  styles: [`
    .link-text {
      min-height:200px;
      height:auto;
      margin: 3%;
      padding: 10px;
      width: 94%;
    }
    .close {
      top: 0;
      right: 4px;
      position: absolute;
    }
    `],
  template: `
    <textarea class="link-text" wrap="soft">{{context.location}}{{context.stateLink}}</textarea>
    <button class="close" (click)="closeModal()">×</button>`
})
export class ShareModal implements CloseGuard, ModalComponent<ShareModalContext> {
  context: ShareModalContext;

  constructor(public dialog: DialogRef<ShareModalContext>) {
    this.context = dialog.context;

    dialog.setCloseGuard(this);
  }

  closeModal() {
    this.dialog.close();
  }

}
