import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  //recordando decoradores
  //@Input() recibir un elemento del componente padre

  //@Output emitir un evento

  @ViewChild('miFormulario') miFormulario:NgForm;//traer una variable local

  inicializarFormulario={
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {

  }

  VerErrorProducto():boolean{
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  }

  VerErrorPrecio():boolean{
    //asi lo realize
    // if( this.miFormulario?.value.precio < 0 ){
    //   return true;
    // }
    // return false;

    //asi lo dejo Fernando
    return this.miFormulario?.controls.precio?.value < 0 && this.miFormulario?.controls.precio?.touched;
  }

  guardar(){
    console.log(this.miFormulario);
    this.miFormulario.resetForm({//limpiar el formulario
      precio:0,
      existencias:0
    });
  }

}
