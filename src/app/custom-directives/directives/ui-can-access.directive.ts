import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {PermissionsService} from "../../service/permissions.service";

@Directive({
  selector: '[uiCanAccess]'
})
export class UiCanAccessDirective implements OnInit {

  @Input('uiCanAccess')
  canAccess: string= ''


  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private permissionsService: PermissionsService) {
  }

  ngOnInit() {
    this.applyPermission()
  }

  private applyPermission(): void {
      this.viewContainer.clear();
      if (this.permissionsService.hasPermission(this.canAccess)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
  }
}
