export class Competicion {
  private _idComp: number;
  private _nomComp: string;
  private _nomAlum: string;
  private _modalidad: string;
  private _categoria: string;
  private _posicion: number;
  private _ganador: string;
  private _caballoGan: string;
  private _premio: number;

public constructor (
  idComp:number, 
  nomComp:string,
  nomAlum:string,
  modalidad: string,
  categoria: string,
  posicion:number,
  ganador:string, 
  caballoGan:string, 
  premio:number
  ) {
        this._idComp = idComp;
        this._nomComp = nomComp;
        this._nomAlum = nomAlum;
        this._modalidad = modalidad;
        this._categoria = categoria;
        this._posicion = posicion;
        this._ganador = ganador;
        this._caballoGan = caballoGan;
        this._premio = premio;
    }
    get idComp() {
        return this._idComp;
    }
    get nomComp() {
      return this._nomComp;
    }
    get nomAlum() {
        return this._nomAlum;
    }
    get modalidad() {
      return this._modalidad;
    }
    get categoria() {
      return this._categoria;
    }
    get posicion() {
      return this._posicion;
    }
    get ganador() {
        return this._ganador;
    }
    get caballoGan() {
        return this._caballoGan;
    }
    get premio() {
        return this._premio;
    }
}