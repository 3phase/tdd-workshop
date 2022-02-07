import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()
  public x: number;

  @Input()
  public y: number;

  constructor() { }

  ngOnInit(): void {
  }

  public addNumber(numOne?: number, numTwo?: number) {
    const numberOne = numOne || this.x;
    const numberTwo = numTwo || this.y;
    
    if (isNaN(numberOne) || isNaN(numberTwo)) {
      throw new Error('Both parameters shouldn\'t be NaN');
    }
    
    return numberOne + numberTwo;
  }

}
