import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaCursosComponent } from './tabla-cursos/tabla-cursos.component';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaCursosComponent,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
