import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PilotoComponent } from './piloto/piloto.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './shared/component/topo/topo.component';
import { RodapeComponent } from './shared/component/rodape/rodape.component';
import { BotoesComponent } from './shared/component/botoes/botoes.component';
import { TabelaComponent } from './shared/component/tabela/tabela.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PilotoComponent,
    TopoComponent,
    RodapeComponent,
    BotoesComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
