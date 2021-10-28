import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorModulo } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
   
  ],

  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModulo

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
