import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [LoginComponent]
})
export class LoginModule{

}
