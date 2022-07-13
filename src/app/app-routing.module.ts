import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirtyGuard } from './dirty.guard';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { SampleForm2Component } from './sample-form2/sample-form2.component';

const routes: Routes = [
  {path:"first",component:SampleFormComponent,canDeactivate:[DirtyGuard]},
  {path:"second",component:SampleForm2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
