import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule ]
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
    result = app.addNumber(NaN, Infinity);
    expect(result).toBe(Infinity);
    result = app.addNumber(17, Infinity);
    expect(result).toBe(Infinity);
  });

  it('should add numbers up via input', () => {
    const app = fixture.componentInstance;
    app.x = 1;
    app.y = 2;
    const result = app.addNumber();
    expect(result).toBe(3);
  });

  it ('should add numbers in template', () => {
    const app = fixture.componentInstance;
    const debugEl = fixture.debugElement.nativeElement;
    const span = debugEl.querySelector('span');
    expect(span.textContent).toBe('0');

    app.x = 1;
    app.y = 2;
    fixture.detectChanges();
    expect(span.textContent).toBe('3');

  });

});
