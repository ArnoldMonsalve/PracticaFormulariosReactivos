import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector:'[custonMin][ngModel]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting:CustomMinDirective,
    multi:true
  }]
})

export class CustomMinDirective implements Validator
{
  @Input() minimo!:number;

  constructor(){}

  validate(control:FormControl){
    let inputValue = control.value;
    return (inputValue = this.minimo) ? {'custonMin':true} : null;
  }

}
