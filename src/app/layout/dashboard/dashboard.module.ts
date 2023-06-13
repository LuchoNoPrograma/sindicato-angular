import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {BrowserModule} from "@angular/platform-browser";
import { EmpleadoComponent } from './empleado/empleado.component';
import { ListaEmpleadoComponent } from './empleado/lista-empleado/lista-empleado.component';

@NgModule({
  declarations: [DashboardComponent, EmpleadoComponent, ListaEmpleadoComponent],
  imports: [BrowserModule],
  exports: [DashboardComponent]
})
export class DashboardModule{
}
