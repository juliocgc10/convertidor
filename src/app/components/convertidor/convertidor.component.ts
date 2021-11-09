import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  
  mapDivisas = new Map([
    ['MXN', 1],
    ['USD', 20.83],
    ['EUR', 25.45]
  ]);


  import = 0;
  convertFrom = 'MXN';
  convertTo = 'USD';
  total = 0;
  divisas: string[] = ['USD', 'MXN', 'EUR'];

  divisaConvertFrom = 0;
  divisaConvertTo = 0

  constructor() { 
    this.executeConvert();
  }

  ngOnInit(): void {
  }

  executeConvert(): void {    

    this.divisaConvertFrom = Number(this.mapDivisas.get(this.convertFrom)) / Number(this.mapDivisas.get(this.convertTo));
    this.divisaConvertTo = Number(this.mapDivisas.get(this.convertTo)) / Number(this.mapDivisas.get(this.convertFrom));

    this.total = this.divisaConvertFrom * this.import;

  }

}
