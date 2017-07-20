import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component/app';

import { NavigationComponent } from './navigation.component/navigation';
import { NavigationItemComponent } from './navigation.item.component/navigation.item';

import { StartComponent } from './start.component/start';

import { TableComponent } from './table.component/table';

import { TeamComponent } from './team.component/team';

import { LadderComponent } from './ladder.component/ladder';
import { LadderUserComponent } from './ladder.user.component/ladder.user';

import { UsersComponent } from './users.component/users';
import { UsersService } from './users.component/users.service';
import { UserListComponent } from './user.list.component/user.list';
import { UserComponent } from './user.component/user';
import { UserEditComponent } from './user.edit.component/user.edit';
import { UserCreateComponent } from './user.create.component/user.create';

import { StatsComponent } from './stats.component/stats';

import { ValidationUserExists } from "./validation.directive/validation.user.exists";

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		NavigationItemComponent,
		StartComponent,
		TableComponent,
		TeamComponent,
		LadderComponent,
		LadderUserComponent,
		UsersComponent,
		UserListComponent,
		UserComponent,
		StatsComponent,
		UserEditComponent,
		UserCreateComponent,
		ValidationUserExists
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule
	],
	providers: [
		UsersService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
