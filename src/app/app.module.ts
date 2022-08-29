import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HoverDirectiveDirective } from './custom-directives/hover-directive.directive';
import { TooltipDirectiveDirective } from './custom-directives/tooltip-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesComponent,
    HoverDirectiveDirective,
    TooltipDirectiveDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
