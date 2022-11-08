import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower: string = 'wicho';
  nombreUpper: string = 'WICHO';
  nombreCompleto: string = 'wIchOcaNul';

  fecha: Date = new Date();

}
