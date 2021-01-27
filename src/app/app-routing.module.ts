import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasAtuacaoComponent } from './areas-atuacao/areas-atuacao.component';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { NaMidiaComponent } from './na-midia/na-midia.component';
import { QuemSouComponent } from './quem-sou/quem-sou.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-sou', component: QuemSouComponent },
  { path: 'areas-atuacao', component: AreasAtuacaoComponent },
  { path: 'na-midia', component: NaMidiaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
