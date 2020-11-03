import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';

import { routingTable } from './routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routingTable),
     ],
  declarations: [ 
    AppComponent, 
    ReviewsComponent

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
