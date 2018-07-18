import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FontSizerComponent } from './font-sizer/font-sizer.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { HighlightV1Directive } from './attribute-directives/highlight-v1.directive';
import { HighlightV2Directive } from './attribute-directives/highlight-v2.directive';
import { HighlightV3Directive } from './attribute-directives/highlight-v3.directive';
import { ReverseIfDirective } from './structural-directives/reverse-if.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { HeroNameComponent } from './hero-name/hero-name.component';
import { CountdownParentWithTempRefVarComponent } from './countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component';
import { CountdownParentWithViewChildComponent } from './countdown-parent-with-view-child/countdown-parent-with-view-child.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DisplayDataInTemplateComponent, DisplayDataInTemplateUrlComponent, TemplateSyntaxComponent, HeroDetailComponent, CustomEventsComponent, DisplayHeroComponent, TwoWayBindingComponent, FontSizerComponent, HeroBioComponent, DirectivesComponent, HighlightDirective, HighlightV1Directive, HighlightV2Directive, HighlightV3Directive, ReverseIfDirective, InteractionComponent, HeroNameComponent, CountdownParentWithTempRefVarComponent, CountdownParentWithViewChildComponent, CountdownTimerComponent, SimpleTodoComponent, TodoDetailComponent, UserDetailComponent, EditUserComponent]
})
export class ComponentsTemplatesModule { }
