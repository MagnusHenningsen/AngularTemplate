import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextboxComponent } from 'src/components/textbox/textbox.component';

const routes: Routes = [
  {path:"", component:TextboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
