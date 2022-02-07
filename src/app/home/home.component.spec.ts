import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add numbers up', () => {
    const app = fixture.componentInstance;

    let result = app.addNumber(1, 2);
    expect(result).toBe(3);
    result = app.addNumber(1, 4);
    expect(result).toBe(5);
    result = app.addNumber(17, 18);
    expect(result).toBe(35);
    result = app.addNumber(-1, 2);
    expect(result).toBe(1);
    expect(() => app.addNumber(NaN, Infinity)).toThrow();
    result = app.addNumber(17, Infinity);
    expect(result).toBe(Infinity);
  })

});
