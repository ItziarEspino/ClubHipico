import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HipicaComponent } from './hipica/hipica.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { GraficopremiosComponent } from './graficopremios/graficopremios.component';
import { PagosComponent } from './pagos/pagos.component';
import { NumcompetiComponent } from './numcompeti/numcompeti.component'


const routes: Routes = [
  { path: 'hipica', component: HipicaComponent },
  { path: 'alumno/:idAl', component: AlumnoComponent },
  //{ path: "jugador/:idJugador", component: JugadorComponent },
  { path: 'graficopremios', component: GraficopremiosComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'numcompeti', component: NumcompetiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
