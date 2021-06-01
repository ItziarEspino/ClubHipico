import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Competicion } from '../models/Competicion';
import { HipicaService } from '../hipica.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-numcompeti',
  templateUrl: './numcompeti.component.html',
  styleUrls: ['./numcompeti.component.css']
})
export class NumcompetiComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  alumno: Array<Alumno>;
  alumnoApi = null;
  alumnoTmp: any;

  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      borderRadius: 80,
      spacing: [20, 20, 20, 20]
    },
    title: {
      text: 'Número de competiciones'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        type: 'pie',
        data: []
      }
    ]
  };
  constructor(private hipicaService: HipicaService) {}

  getNumero() {
    this.hipicaService.getHipicaApi().subscribe(
      result => {
        const Datos: any = result;
        const dataSeries = Datos.map((x: any) => x.getncomp());
        const dataCategorias = Datos.map((x: any) => x.nomAlum);
        this.chartOptions.series[0]['data'] = dataSeries;
        this.chartOptions.xAxis['categories'] = dataCategorias;
        Highcharts.chart('Grafico01', this.chartOptions);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.getNumero();
  }
}
