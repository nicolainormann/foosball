import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start.component/start';

import { LadderComponent } from './ladder.component/ladder';

import { UsersComponent } from './users.component/users';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
