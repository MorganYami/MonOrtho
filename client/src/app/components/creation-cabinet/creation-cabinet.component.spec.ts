import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCabinetComponent } from './creation-cabinet.component';

describe('CreationCabinetComponent', () => {
  let component: CreationCabinetComponent;
  let fixture: ComponentFixture<CreationCabinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationCabinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
