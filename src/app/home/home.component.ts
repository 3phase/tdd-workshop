import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public addNumber(numOne: number, numTwo: number) {
    if (isNaN(numOne) || isNaN(numTwo)) {
      throw new Error('Both parameters shouldn\'t be NaN');
    }
    return numOne + numTwo;
  }

}
