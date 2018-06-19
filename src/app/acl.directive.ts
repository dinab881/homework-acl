import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from './user.service';
@Directive({
    selector: '[appAcl]'
})
export class AclDirective {
    constructor(private templateRef:TemplateRef<any>,
                private viewContainer:ViewContainerRef,
                private userService:UserService) {
    }

    @Input() set appAcl(roles:string[]) {
        let currentUserRoleId = this.userService.getCurrentUser().role_id;
        if (roles.includes(currentUserRoleId)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }

    }

}
