import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuspicianteComponent } from './auspiciante.component';

describe('AuspicianteComponent', () => {
  let component: AuspicianteComponent;
  let fixture: ComponentFixture<AuspicianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuspicianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuspicianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
