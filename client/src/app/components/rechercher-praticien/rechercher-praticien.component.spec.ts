import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherPraticienComponent } from './rechercher-praticien.component';

describe('RechercherPraticienComponent', () => {
  let component: RechercherPraticienComponent;
  let fixture: ComponentFixture<RechercherPraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercherPraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
