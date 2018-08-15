import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { ModulesDemoModule } from './modules-demo/modules-demo.module';

import { CounterOneModule } from './counter-one/counter-one.module';
import { CounterTwoModule } from './counter-two/counter-two.module';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ComponentsTemplatesModule,
    RxDemoModule,
    ModulesDemoModule,
    CounterOneModule.forRoot(),
    CounterTwoModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
