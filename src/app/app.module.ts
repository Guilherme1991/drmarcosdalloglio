import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { SlideHomeComponent } from './slide-home/slide-home.component';
import { SectionComponent } from './section/section.component';
import { AreasComponent } from './areas/areas.component';
import { FooterComponent } from './footer/footer.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { HomeComponent } from './home/home.component';
import { AreasAtuacaoComponent } from './areas-atuacao/areas-atuacao.component';
import { NaMidiaComponent } from './na-midia/na-midia.component';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    SlideHomeComponent,
    SectionComponent,
    AreasComponent,
    FooterComponent,
    QuemSouComponent,
    HomeComponent,
    AreasAtuacaoComponent,
    NaMidiaComponent,
    BlogComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
