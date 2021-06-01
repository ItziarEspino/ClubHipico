import { Component, OnInit } from '@angular/core';
import { HipicaService } from '../hipica.service';
import { Alumno } from '../models/Alumno';
import { Competicion } from '../models/Competicion';

@Component({
  selector: 'app-hipica',
  templateUrl: './hipica.component.html',
  styleUrls: ['./hipica.component.css']
})
export class HipicaComponent implements OnInit {
  hipica: Array<Alumno> = [];
  hipicaApi = null;
  hipicaTmp: any;
  constructor(private hipicaService: HipicaService) { }

getHipicaApi() {
    this.hipicaService.getHipicaApi().subscribe(hipica => {
      this.hipicaApi = hipica;
      for (let alumno of this.hipicaApi) {
        let competiciones: Array<Competicion> = new Array();
        for (let competicion of alumno.competiciones) {
          let c = new Competicion(
            competicion.idComp,
            competicion.nomComp,
            competicion.modalidad,
            competicion.categoria,
            competicion.participa,
            competicion.posicion,
            competicion.ganador,
            competicion.caballoGan,
            competicion.premio
          );
          competiciones.push(c);
        }
        let a = new Alumno(
          alumno.idAl,
          alumno.nombr,
          alumno.fechnac,
          alumno.tipoclase,
          alumno.dias,
          alumno.caballoProp,
          alumno.pupilaje,
          alumno.nomCaballo,
          alumno.razaCaballo,
          alumno.pelaje,
          competiciones
        );
        this.hipica.push(a);
      }
    });
  }

delete(alumno: Alumno): void {
    this.hipica = this.hipica.filter(h => h !== alumno);
    this.hipicaService.deleteAlumno(alumno).subscribe();
  }

add(
    idAl: string,
    nombr: string,
    fechnac: string,
    tipoclase: string,
    dias: string,
    caballoProp: string,
    pupilaje: string,
    nomCaballo: string,
    razaCaballo: string,
    pelaje: string
  ): void {
    const idAl1 = parseInt(idAl);
    const nombr1 = nombr.trim();
    const fechnac1 = new Date(fechnac);
    const tipoclase1 = tipoclase.trim();
    const dias1 = parseInt(dias);
    const caballoProp1 = caballoProp.trim();
    const pupilaje1 = pupilaje.trim();
    const nomCaballo1 = nomCaballo.trim();
    const razaCaballo1 = razaCaballo.trim();
    const pelaje1 = pelaje.trim();
    /*if (!nombr) {
      return;
    }*/
    const newDoc: any = {
      idAl: idAl1,
      nombr: nombr1,
      fechnac: fechnac1,
      tipoclase: tipoclase1,
      dias: dias1,
      caballoProp: caballoProp1,
      pupilaje: pupilaje1,
      nomCaballo: nomCaballo1,
      razaCaballo: razaCaballo1,
      pelaje: pelaje1
    };
    this.hipicaService.addAlumno(newDoc).subscribe(alumno => {
      this.hipicaTmp = alumno;
      this.hipica.push(this.hipicaTmp);
    });
  }

  ngOnInit() {
    this.getHipicaApi();
  }

}