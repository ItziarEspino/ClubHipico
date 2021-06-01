import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { Competicion } from '../models/Competicion';
import { HipicaService } from '../hipica.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  alumno: Array<Alumno>;
  alumnoApi = null;
  alumnoTmp: any;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'white',
      borderRadius: 80,
      spacing: [20, 20, 20, 20]
    },
    title: {
      text: 'Pagos de los alumnos',
      style: {
        fontFamily: 'Cambria',
        fontSize: '30px',
        color: 'black'
      }
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: '€'
      }
    },

    series: [
      {
        type: 'column',
        name: 'clases',
        data: [],
        color: '#02F9E1'
      },
      {
        type: 'column',
        name: 'caballo',
        data: [],
        color: '#894ACC'
      },
      {
        type: 'column',
        name: 'pupilaje',
        data: [],
        color: '#F90202'
      }
    ],
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white'
      }
    }
  };

  constructor(private hipicaService: HipicaService) {}

  getDatAlumn() {
    this.hipicaService.getHipicaApi().subscribe(alumno => {
      this.alumnoApi = alumno;
      
      let grafico = this.alumno;
      this.chartOptions.xAxis["categories"] = grafico.map(
        (x: Alumno) => x.nombr
      );

      this.chartOptions.series[0]["data"] = grafico.map((x: Alumno) =>
        x.getcPrecio()
      );
      this.chartOptions.series[1]["data"] = grafico.map((x: Alumno) =>
        x.getcaballoPres()
      );
      this.chartOptions.series[2]["data"] = grafico.map((x: Alumno) =>
        x.gettpupilaje()
      );

      Highcharts.chart('Grafico02', this.chartOptions);
    });
  }

  ngOnInit() {
    this.getDatAlumn();
  }
}
