import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HipicaService } from "../hipica.service";
import { Alumno } from '../models/Alumno';
import { Competicion } from '../models/Competicion';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competicion',
  templateUrl: './competicion.component.html',
  styleUrls: ['./competicion.component.css']
})
export class CompeticionComponent implements OnInit {
  competicion: Competicion;
  competicionApi = null;

  constructor(
    private route: ActivatedRoute,
    private hipicaService: HipicaService,
    private location: Location
  ) {}

  getCompeticion() {
    let idComp: any = this.route.snapshot.paramMap.get('idComp');
    let i = idComp.split('&');

    idComp = i[0];
    let hipica = i[1];

    this.hipicaService.getCompeticion(idComp, hipica).subscribe(n => {
    this.competicionApi = n;
    this.competicion = new Competicion(
      this.competicionApi.idComp,
      this.competicionApi.nomComp,
      this.competicionApi.nomAlum,
      this.competicionApi.modalidad,
      this.competicionApi.categoria,
      this.competicionApi.posicion,
      this.competicionApi.ganador,
      this.competicionApi.caballoGan,
      this.competicionApi.premio
    );
    });
  }

  save(
    nomComp: string,
    modalidad: string,
    categoria: string,
    posicion: string,
    ganador: string,
    caballoGan: string,
    premio: string
  ): void {
    const nomComp1 = nomComp.trim();
    const modalidad1 = modalidad.trim();
    const categoria1 = categoria.trim();
    const posicion1 = parseInt(posicion);
    const ganador1 = ganador.trim();
    const caballoGan1 = caballoGan.trim();
    const premio1 = parseInt(premio);

    const doc = {
      idComp: this.competicion.idComp,
      nomComp: nomComp1,
      nomAlum: this.competicion.nomAlum,
      modalidad: modalidad1,
      categoria: categoria1,
      posicion: posicion1,
      ganador: ganador1,
      caballoGan: caballoGan1,
      premio: premio1
    };
    this.hipicaService.updateCompeticion(doc).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCompeticion();
  }
}
