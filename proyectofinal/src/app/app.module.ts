import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoapComponent } from './componets/logoap/logoap.component';
import { HeaderComponent } from './componets/header/header.component';
import { RedesComponent } from './componets/redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoapComponent,
    HeaderComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
