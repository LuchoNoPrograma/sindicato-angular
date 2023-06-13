import { Component } from '@angular/core';
import {faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutenticacionService} from "../../core/service/autenticacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm !: FormGroup;
  public autenticado: boolean = false;
  protected readonly faRightToBracket = faRightToBracket;

  constructor(private fb: FormBuilder, private login:AutenticacionService){}

  ngOnInit(){
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario: ['admin', [Validators.required]],
      password: ['123456', Validators.required]
    });
  }

  public submitForm(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    if(!this.login.autenticarInicioSesion(this.myForm.value)){
      this.autenticado = !this.autenticado;
    }
  }

  public get myFormProps():  {[p: string]: AbstractControl<any, any>}{
    return this.myForm.controls;
  }
}
