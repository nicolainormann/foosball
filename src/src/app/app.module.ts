import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component/app';

import { NavigationComponent } from './navigation.component/navigation';
import { NavigationItemComponent } from './navigation.item.component/navigation.item';

import { StartComponent } from './start.component/start';

import { LadderComponent } from './ladder.component/ladder';

import { StatsComponent } from './stats.component/stats';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationItemComponent,
    StartComponent,
    LadderComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
