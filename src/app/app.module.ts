import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatPaginatorModule,
  MatGridListModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GamesComponent } from './games/games.component';
import { DataService } from './data.service';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    SortPipe,
    SearchPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
