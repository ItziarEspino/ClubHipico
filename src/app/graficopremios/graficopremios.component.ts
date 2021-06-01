import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Competicion } from '../models/Competicion';
import { HipicaService } from '../hipica.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graficopremios',
  templateUrl: './graficopremios.component.html',
  styleUrls: ['./graficopremios.component.css']
})
export class GraficopremiosComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  alumno: Array<Alumno> = [];
  alumnosApi = null;
  hipicaTmp: any;
  competicion: Array<Competicion> = [];

  chartOptions: Highcharts.Options = {
    title: {
      text: 'Gráfico de premios en competiciones'
    },
    chart: {
      type: 'column',
      borderRadius: 80,
      spacing: [20, 20, 20, 20]
    },
    xAxis: {
      categories: [],
      title: {
        text: 'Nombre'
      }
    },
    yAxis: {
      accessibility: {},
      title: {
        text: 'Premios en €'
      }
    },

    series: [
      {
        type: 'column',
        data: [],
        name: '€'
      }
    ],
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#303030'
      }
    }
  };

  constructor(private hipicaService: HipicaService) {}

  getDatos() {
    this.hipicaService.getHipicaApi().subscribe(
      result => {
        const Datos: any = result;
        const dataSeries = Datos.map((x: any) => x.getdinero());
        const dataCategorias = Datos.map((x: any) => x.nomAlum);
        this.chartOptions.series[0]['data'] = dataSeries;
        this.chartOptions.xAxis['categories'] = dataCategorias;
        Highcharts.chart('Grafico01', this.chartOptions);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.getDatos();
  }
}
