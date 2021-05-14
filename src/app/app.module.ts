import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiposDePipesComponent } from './tipos-de-pipes/tipos-de-pipes.component';
import { NumeroPipe } from './pipes/numero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TiposDePipesComponent,
    NumeroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
