import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPraticienComponent } from './creation-praticien.component';

describe('CreationPraticienComponent', () => {
  let component: CreationPraticienComponent;
  let fixture: ComponentFixture<CreationPraticienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPraticienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
