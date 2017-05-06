"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ShareModalContext = (function (_super) {
    __extends(ShareModalContext, _super);
    function ShareModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShareModalContext;
}(bootstrap_1.BSModalContext));
exports.ShareModalContext = ShareModalContext;
var ShareModal = (function () {
    function ShareModal(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }
    ShareModal.prototype.closeModal = function () {
        this.dialog.close();
    };
    return ShareModal;
}());
ShareModal = __decorate([
    core_1.Component({
        selector: 'modal-content',
        styles: ["\n    .link-text {\n      min-height:200px;\n      height:auto;\n      margin: 3%;\n      padding: 10px;\n      width: 94%;\n    }\n    .close {\n      top: 0;\n      right: 4px;\n      position: absolute;\n    }\n    "],
        template: "\n    <textarea class=\"link-text\" wrap=\"soft\">{{context.location}}{{context.stateLink}}</textarea>\n    <button class=\"close\" (click)=\"closeModal()\">\u00D7</button>"
    }),
    __metadata("design:paramtypes", [angular2_modal_1.DialogRef])
], ShareModal);
exports.ShareModal = ShareModal;
//# sourceMappingURL=custom-modal.js.map