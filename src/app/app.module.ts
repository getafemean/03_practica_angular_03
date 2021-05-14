import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiposDePipesComponent } from './tipos-de-pipes/tipos-de-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TiposDePipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
