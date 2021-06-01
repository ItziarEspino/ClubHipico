import { Competicion } from './Competicion';

export class Alumno {
  private _idAl: number;
  private _nombr: string;
  private _fechnac: Date;
  private _tipoclase: string;
  private _dias: number;
  private _caballoProp: string;
  private _pupilaje: string;
  private _nomCaballo: string;
  private _razaCaballo: string;
  private _pelaje: string;
  private _competiciones: Array<Competicion>;

  public constructor(
    idAl: number,
    nombr: string,
    fechnac: Date,
    tipoclase: string,
    dias: number,
    caballoProp: string,
    pupilaje: string,
    nomCaballo: string,
    razaCaballo: string,
    pelaje: string,
    competiciones: Array<Competicion>
  ) {
    this._idAl = idAl;
    this._nombr = nombr;
    this._fechnac = fechnac;
    this._tipoclase = tipoclase;
    this._dias = dias;
    this._caballoProp = caballoProp;
    this._pupilaje = pupilaje;
    this._nomCaballo = nomCaballo;
    this._razaCaballo = razaCaballo;
    this._pelaje = pelaje;
    this._competiciones = competiciones;
  }
  get idAl() {
    return this._idAl;
  }
  get nombr() {
    return this._nombr;
  }
  get fechnac() {
    return this._fechnac;
  }
  get tipoclase() {
    return this._tipoclase;
  }
  get dias() {
    return this._dias;
  }
  get caballoProp() {
    return this._caballoProp;
  }
  get pupilaje() {
    return this._pupilaje;
  }
  get nomCaballo() {
    return this._nomCaballo;
  }
  get razaCaballo() {
    return this._razaCaballo;
  }
  get pelaje() {
    return this._pelaje;
  }
  get competiciones() {
    return this._competiciones;
  }
  getcaballoPres() {
    if (this._caballoProp == 'no') {
      let precab1: number;
      return (precab1 = 100);
    } else {
      let precab2: number;
      return (precab2 = 0);
    }
  }
  gettpupilaje() {
    if (this._pupilaje == 'si') {
      let prepupilaje1: number;
      return (prepupilaje1 = 250);
    } else {
      let prepupilaje2: number;
      return (prepupilaje2 = 0);
    }
  }
  getcPrecio() {
    if (this._tipoclase == 'doma') {
      let precio1: number;
      return (precio1 = this._dias * 35);
    } else {
      if (this._tipoclase == 'salto') {
        let precio2: number;
        return (precio2 = this._dias * 45);
      } else {
        if (this._tipoclase == 'cross') {
          let precio3: number;
          return (precio3 = this._dias * 40);
        }
      }
    }
  }
  getdinero() {
    let res = 0;
    for (let c of this.competiciones) {
      res = res + c.premio;
    }
    return res;
  }
  getncomp() {
    let res = 0;
    for (let c of this.competiciones) {
      if (c.nomComp != '') {
        res++;
      }
    }
    return res;
  }
}
