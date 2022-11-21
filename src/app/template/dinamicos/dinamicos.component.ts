import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favoritos[];
}

interface Favoritos{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario:NgForm;

  nuevojuego:string='';

  persona:Persona={
    nombre:'Arnold',
    favoritos:[
      {
        id:1, nombre:"HALO"
      },
      {
        id:2, nombre:'LOL'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario);
  }

  ErrorNombre():boolean{
    return this.miFormulario?.controls.nombre?.value == '' && this.miFormulario?.controls.nombre?.touched;
  }

  agregar(){

    if(this.nuevojuego == '' || this.nuevojuego == undefined){
      alert('Por favor, llenas este campo')
    }else{
      const nuevoFavorito : Favoritos={
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevojuego
      };

      this.persona.favoritos.push({...nuevoFavorito});
      //limpiaremos el input
      this.nuevojuego='';

    }
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
}
