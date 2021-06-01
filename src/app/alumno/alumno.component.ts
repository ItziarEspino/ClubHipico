import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HipicaService } from "../hipica.service";
import { Alumno } from '../models/Alumno';
import { Competicion } from '../models/Competicion';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumno: Alumno;
  alumnoApi = null;

  constructor(
    private route: ActivatedRoute,
    private hipicaService: HipicaService,
    private location: Location
  ) {}

  getAlumno(): void {
    const idAl = this.route.snapshot.paramMap.get('idAl');
    this.hipicaService.getAlumno(idAl).subscribe(a => {
    this.alumnoApi = a;
    for (let alumno of this.alumnoApi) {
    let competiciones: Array<Competicion> = new Array();
    for (let competicion of this.alumnoApi.competiciones) {
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
    this.alumno = new Alumno(
      this.alumnoApi.idAl,
      this.alumnoApi.nombr,
      this.alumnoApi.fechnac,
      this.alumnoApi.tipoclase,
      this.alumnoApi.dias,
      this.alumnoApi.caballoProp,
      this.alumnoApi.pupilaje,
      this.alumnoApi.nomCaballo,
      this.alumnoApi.razaCaballo,
      this.alumnoApi.pelaje,
      competiciones
    );
    }
    });
  }

  add(
    idComp: string,
    nomComp: string,
    modalidad: string,
    categoria: string,
    participa: string,
    posicion: string,
    ganador: string,
    caballoGan: string,
    premio: string
  ) {
    const idComp1 = parseInt(idComp);
    const nomComp1 = nomComp.trim();
    const modalidad1 = modalidad.trim();
    const categoria1 = categoria.trim();
    const participa1 = parseInt(participa);
    const posicion1 = parseInt(posicion);
    const ganador1 = ganador.trim();
    const caballoGan1 = caballoGan.trim();
    const premio1 = parseInt(premio);

    const newDoc: any = {
      idComp: idComp1,
      nomComp: nomComp1,
      modalidad: modalidad1,
      categoria: categoria1,
      participa: participa1,
      posicion: posicion1,
      ganador: ganador1,
      caballoGan: caballoGan1,
      premio: premio1
    };
    this.hipicaService.addCompeticion(newDoc).subscribe(c => {
      const competicionTmp: any = newDoc;
      this.alumnoApi.competiciones.push(competicionTmp);
    });
  }

  save(
    tipoclase: string,
    dias: string,
    caballoProp: string,
    pupilaje: string,
    nomCaballo: string,
    razaCaballo: string,
    pelaje: string
  ): void {
    const tipoclase1 = tipoclase.trim();
    const dias1 = parseInt(dias);
    const caballoProp1 = caballoProp.trim();
    const pupilaje1 = pupilaje.trim();
    const nomCaballo1 = nomCaballo.trim();
    const razaCaballo1 = razaCaballo.trim();
    const pelaje1 = pelaje.trim();
    const doc = {
      idAl: this.alumno.idAl,
      nombr: this.alumno.nombr,
      tipoclase: tipoclase1,
      dias: dias1,
      caballoProp: caballoProp1,
      pupilaje: pupilaje1,
      nomCaballo: nomCaballo1,
      razaCaballo: razaCaballo1,
      pelaje: pelaje1
    };
    this.hipicaService.updateAlumno(doc).subscribe(() => this.goBack());
  }

  /*delete(competicion: Competicion): void {
    this.alumno.competiciones.forEach((c, index) => {
      if (c === competicion) this.alumno.competiciones.splice(index, 1);
    });
    //this.alumnoService.deleteCompeticion(Competicion).subscribe();
  }*/

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getAlumno();
  }
}
