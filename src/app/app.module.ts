import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PilotoComponent } from './piloto/piloto.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './shared/component/topo/topo.component';
import { RodapeComponent } from './shared/component/rodape/rodape.component';
import { BotoesComponent } from './shared/component/botoes/botoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PilotoComponent,
    TopoComponent,
    RodapeComponent,
    BotoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
