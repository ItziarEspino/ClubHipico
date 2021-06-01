import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './models/Alumno';
import { Competicion } from './models/Competicion';

@Injectable({ providedIn: 'root' })
export class HipicaService {
  private url = 'https://proyectofinalapihipica.herokuapp.com/';
  constructor(private http: HttpClient) {}
  getAlumno(idAl: string) {
    const urlget = `https://proyectofinalapihipica.herokuapp.com/alumno/${idAl}`;
    return this.http.get(urlget);
  }
  addAlumno(doc: any) {
    const urlpost = `https://proyectofinalapihipica.herokuapp.com/alumno`;
    return this.http.post(urlpost, doc);
  }

  getHipicaApi() {
    const urlget = `${this.url}hipica`;
    return this.http.get(urlget);
  }

  updateAlumno(doc: any) {
    const urlpost = `https://proyectofinalapihipica.herokuapp.com/alumno/${doc.idAl}`;
    return this.http.post(urlpost, doc);
  }

  getCompeticion(idComp: number, nomComp: string) {
    const urlget = `https://proyectofinalapihipica.herokuapp.com/competicion/${idComp}&${nomComp}`;
    return this.http.get(urlget);
  }

  addCompeticion(doc: any) {
    const urlpost = `https://proyectofinalapihipica.herokuapp.com/competicion`;
    return this.http.post(urlpost, doc);
  }

  updateCompeticion(doc: any) {
    const urlpost = `https://proyectofinalapihipica.herokuapp.com/competicion/${doc.idComp}&${doc.nomComp}`;
    return this.http.post(urlpost, doc);
  }

  deleteAlumno(alumno: Alumno) {
    const urlget = `https://proyectofinalapihipica.herokuapp.com/borrarAlumno/${alumno.idAl}&${alumno.nombr}`;
    return this.http.get(urlget);
  }
}
