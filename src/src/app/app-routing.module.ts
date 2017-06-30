import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start.component/start';

import { LadderComponent } from './ladder.component/ladder';

import { UsersComponent } from './users.component/users';

import { StatsComponent } from './stats.component/stats';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'ladder',
    component: LadderComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
