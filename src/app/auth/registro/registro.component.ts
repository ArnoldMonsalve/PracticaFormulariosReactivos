import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPatter, noPuedeSerStrider } from 'src/app/shared/validaciones/validaciones';
import { ValidacionesService } from '../../shared/validaciones.service';
import { EmailValidatorService } from '../../shared/validaciones/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //llamado desde un ts sin service
  // miFormulario: FormGroup = this.fb.group({
  //   nombre:['',[Validators.required, Validators.pattern(nombreApellidoPatter)]],
  //   email:['',[Validators.required, Validators.pattern(emailPattern)]],
  //   usuario:['',[Validators.required,noPuedeSerStrider ]]
  // })

  //llamado con service
  miFormulario: FormGroup = this.fb.group({
  nombre:['',[Validators.required, Validators.pattern(this.validaciones_.nombreApellidoPatter)]],
  email:['',[Validators.required, Validators.pattern(this.validaciones_.emailPattern)],[this.email_.validate]],
  usuario:['',[Validators.required,this.validaciones_.noPuedeSerStrider ]],
  password:['',[Validators.required, Validators.minLength(6)]],
  password2:['',[Validators.required]]
},{
  validators:[this.validaciones_.camposIguales('password','password2')]
})


  constructor(private fb:FormBuilder, private validaciones_:ValidacionesService, private email_: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Arnold Monsalve',
      email:'test1@test.com',
      username:'arnold_25'
    })
  }

  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors
            && this.miFormulario.controls[campo].touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
