import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomDirectivesComponent} from './custom-directives/custom-directives.component';
import {HoverDirective} from './custom-directives/hover.directive';
import {TooltipDirective} from './custom-directives/tooltip.directive';
import {HighlightDirective} from './custom-directives/highlight.directive';
import {UiCanAccessDirective} from "./custom-directives/ui-can-access.directive";
import { VideoDirective } from './custom-directives/video.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesComponent,
    HoverDirective,
    TooltipDirective,
    HighlightDirective,
    UiCanAccessDirective,
    VideoDirective

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
