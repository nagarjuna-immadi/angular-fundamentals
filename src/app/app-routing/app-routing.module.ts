import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from '../index/index.component';

import { DisplayDataInTemplateComponent } from '../components-templates/display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from '../components-templates/display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from '../components-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from '../components-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from '../components-templates/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from '../components-templates/directives/directives.component';
import { InteractionComponent } from '../components-templates/interaction/interaction.component';
import { LifecycleHooksComponent } from '../components-templates/lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleContentHooksComponent } from '../components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component';
import { LifecycleViewHooksComponent } from '../components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component';
import { StylesDemoComponent } from '../components-templates/style-components/styles-demo/styles-demo.component';
import { InputTestComponent } from '../components-templates/input-test/input-test.component';
import { PipesComponent } from '../components-templates/pipes/pipes/pipes.component';

import { ObservablesDemoComponent } from '../rx-demo/observables-demo/observables-demo.component';
import { SubjectDemoComponent } from '../rx-demo/subject-demo/subject-demo.component';
import { OperatorsDemoComponent } from '../rx-demo/operators-demo/operators-demo.component';
import { DifferentOperatorsComponent } from '../rx-demo/different-operators/different-operators.component';

import { LazyLoadingDemoComponent } from '../modules-demo/lazy-loading-demo/lazy-loading-demo.component';
import { EagerVsLazyLoadingComponent } from '../modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component';

import { CounterHomeComponent as CounterOneHomeComponent } from '../counter-one/counter-home/counter-home.component';
import { CounterHomeComponent as CounterTwoHomeComponent } from '../counter-two/counter-home/counter-home.component';

import { FormControlComponent } from '../forms-demo/reactive/form-control/form-control.component';
import { FormGroupComponent } from '../forms-demo/reactive/form-group/form-group.component';
import { NestedFormGroupComponent } from '../forms-demo/reactive/nested-form-group/nested-form-group.component';
import { FormBuilderComponent } from '../forms-demo/reactive/form-builder/form-builder.component';
import { FormArrayComponent } from '../forms-demo/reactive/form-array/form-array.component';
import { SuperHeroComponent } from '../forms-demo/template-driven/super-hero/super-hero.component';
import { ReactiveFormValidationComponent } from '../forms-demo/reactive/reactive-form-validation/reactive-form-validation.component';
import { TemplateDrivenFormValidationComponent } from '../forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component';

const appRoutes: Routes = [
  { path: 'index', component:  IndexComponent },

  /* Components - Templates */
  { path: 'components-templates/display-data-in-template', component:  DisplayDataInTemplateComponent },
  { path: 'components-templates/display-data-in-template-url', component:  DisplayDataInTemplateUrlComponent },
  { path: 'components-templates/template-syntax', component:  TemplateSyntaxComponent },
  { path: 'components-templates/template-syntax/custom-events', component:  CustomEventsComponent },
  { path: 'components-templates/template-syntax/two-way-binding', component:  TwoWayBindingComponent },
  { path: 'components-templates/directives', component:  DirectivesComponent },
  { path: 'components-templates/component-interaction', component:  InteractionComponent },
  { path: 'components-templates/lifecycle-hooks', component:  LifecycleHooksComponent },
  { path: 'components-templates/lifecycle-hooks/content-hooks', component:  LifecycleContentHooksComponent },
  { path: 'components-templates/lifecycle-hooks/view-hooks', component:  LifecycleViewHooksComponent },
  { path: 'components-templates/styles-demo', component:  StylesDemoComponent },
  { path: 'components-templates/input-test', component:  InputTestComponent },
  { path: 'components-templates/pipes', component:  PipesComponent },

  /* rx-demo module routes */
  { path: 'rxjs/observables-demo', component: ObservablesDemoComponent },
  { path: 'rxjs/subjects-demo', component: SubjectDemoComponent },
  { path: 'rxjs/operators-demo', component: OperatorsDemoComponent },
  { path: 'rxjs/different-operators', component: DifferentOperatorsComponent },

  /* NgModules routes */
  { path: 'ngmodules/lazy-loading', component: LazyLoadingDemoComponent },

  /* Lazy loading demo routes */
  { path: 'customers', loadChildren: '../customers/customers.module#CustomersModule' },
  { path: 'orders', loadChildren: '../orders/orders.module#OrdersModule' },

  /* Eager Vs Lazy loading demo routes */
  { path: 'ngmodules/eager-vs-lazy-loading', component: EagerVsLazyLoadingComponent },
  { path: 'ngmodules/eager-vs-lazy-loading/counter-one-home', component: CounterOneHomeComponent },
  { path: 'ngmodules/eager-vs-lazy-loading/counter-two-home', component: CounterTwoHomeComponent },
  { path: 'lazy-counter-home', loadChildren: '../counter-lazy/counter-lazy.module#CounterLazyModule' },

  /* Forms demo routes */
  { path: 'forms/reactive/form-control', component: FormControlComponent },
  { path: 'forms/reactive/form-group', component: FormGroupComponent },
  { path: 'forms/reactive/nested-form-group', component: NestedFormGroupComponent },
  { path: 'forms/reactive/form-builder', component: FormBuilderComponent },
  { path: 'forms/reactive/form-array', component: FormArrayComponent },
  { path: 'forms/template-driven', component: SuperHeroComponent },
  { path: 'forms/validation/reactive', component: ReactiveFormValidationComponent },
  { path: 'forms/validation/template-driven', component: TemplateDrivenFormValidationComponent },

  /* Default path and wild match routes */  
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [PageNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
