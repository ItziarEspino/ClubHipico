import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";

import { AppComponent } from "./app.component";
import { HipicaComponent } from './hipica/hipica.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { HipicaService } from './hipica.service';
import { AppRoutingModule } from "./app-routing.module";
import { CompeticionComponent } from './competicion/competicion.component';
import { GraficopremiosComponent } from './graficopremios/graficopremios.component';
import { PagosComponent } from './pagos/pagos.component';
import { NumcompetiComponent } from './numcompeti/numcompeti.component';

import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent, 
    HipicaComponent, 
    AlumnoComponent, 
    CompeticionComponent, 
    GraficopremiosComponent, 
    PagosComponent, 
    NumcompetiComponent
  ],
  bootstrap: [AppComponent],
  providers: [HipicaService, {provide: APP_BASE_HREF, useValue: '/my/app'}]
})
export class AppModule {}
