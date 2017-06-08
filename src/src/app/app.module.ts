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

import { DialogueComponent } from './dialogue.component/dialogue';
import { DialogueService } from './dialogue.component/dialogue.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationItemComponent,
    StartComponent,
    LadderComponent,
    StatsComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DialogueService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
