import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaCursosComponent } from './tabla-cursos/tabla-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
