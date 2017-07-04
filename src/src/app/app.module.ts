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

import { LadderComponent } from './ladder.component/ladder';

import { UsersComponent } from './users.component/users';
import { UsersService } from './users.component/users.service';
import { UserListComponent } from './user.list.component/user.list';
import { UserComponent } from './user.component/user';

import { StatsComponent } from './stats.component/stats';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		NavigationItemComponent,
		StartComponent,
		LadderComponent,
		UsersComponent,
		UserListComponent,
		UserComponent,
		StatsComponent
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
