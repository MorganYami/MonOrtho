import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatCabinetComponent } from './resultat-cabinet.component';

describe('ResultatCabinetComponent', () => {
  let component: ResultatCabinetComponent;
  let fixture: ComponentFixture<ResultatCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
