import { Component } from '@angular/core';
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {AutenticacionService} from "./core/service/autenticacion.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sindicato-angular';
  protected readonly faCoffee = faCoffee;

  constructor(private auth : AutenticacionService){}
  public ingresarDashboard():boolean{
    return this.auth.sesionActiva();
  }
}
