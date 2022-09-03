import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomDirectivesComponent} from './custom-directives/custom-directives.component';
import {HoverDirective} from './custom-directives/directives/hover.directive';
import {TooltipDirective} from './custom-directives/directives/tooltip.directive';
import {HighlightDirective} from './custom-directives/directives/highlight.directive';
import {UiCanAccessDirective} from "./custom-directives/directives/ui-can-access.directive";
import {VideoDirective} from './custom-directives/directives/video.directive';
import {LayoutComponent} from './layout/layout.component';
import { ToggleDirective } from './custom-directives/directives/toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesComponent,
    HoverDirective,
    TooltipDirective,
    HighlightDirective,
    UiCanAccessDirective,
    VideoDirective,
    LayoutComponent,
    ToggleDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
