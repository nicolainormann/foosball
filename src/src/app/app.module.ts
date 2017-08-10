import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component/app';

import { NavigationComponent } from './navigation.component/navigation';
import { NavigationItemComponent } from './navigation.item.component/navigation.item';

import { StartComponent } from './start.component/start';

import { TournamentsComponent } from './tournaments.component/tournaments';
import { TournamentsService } from './tournaments.component/tournaments.service';
import { TournamentComponent } from './tournament.component/tournament';

import { TableComponent } from './table.component/table';

import { TeamComponent } from './team.component/team';
import { TeamPreviewComponent } from './team.preview.component/team.preview';
import { TeamMemberComponent } from './team.member.component/team.member';

import { LadderComponent } from './ladder.component/ladder';
import { LadderUserComponent } from './ladder.user.component/ladder.user';

import { UsersComponent } from './users.component/users';
import { UsersService } from './users.component/users.service';
import { UserListComponent } from './user.list.component/user.list';
import { UserComponent } from './user.component/user';
import { UserEditComponent } from './user.edit.component/user.edit';
import { UserCreateComponent } from './user.create.component/user.create';

import { ValidationUserExists } from "./validation.directive/validation.user.exists";
import { ClickOutsideDirective } from "./click.outside.directive/click.outside";

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		NavigationItemComponent,
		StartComponent,
		TournamentsComponent,
		TournamentComponent,
		TableComponent,
		TeamComponent,
		TeamPreviewComponent,
		TeamMemberComponent,
		LadderComponent,
		LadderUserComponent,
		UsersComponent,
		UserListComponent,
		UserComponent,
		UserEditComponent,
		UserCreateComponent,
		ValidationUserExists,
		ClickOutsideDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		TournamentsService,
		UsersService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
