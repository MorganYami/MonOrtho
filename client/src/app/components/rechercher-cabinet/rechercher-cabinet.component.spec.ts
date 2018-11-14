import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherCabinetComponent } from './rechercher-cabinet.component';

describe('RechercherCabinetComponent', () => {
  let component: RechercherCabinetComponent;
  let fixture: ComponentFixture<RechercherCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
