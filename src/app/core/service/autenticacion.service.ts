import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService{
  private autenticado : boolean = false;
  constructor(){
  }

  public autenticarInicioSesion(obj:any):boolean{
    this.autenticado = obj.usuario == 'admin' && obj.password == '123456';
    return this.autenticado;
  }

  public sesionActiva():boolean{
    return this.autenticado;
  }
}
