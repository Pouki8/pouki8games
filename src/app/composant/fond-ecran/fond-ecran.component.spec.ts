import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondEcranComponent } from './fond-ecran.component';

describe('FondEcranComponent', () => {
  let component: FondEcranComponent;
  let fixture: ComponentFixture<FondEcranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondEcranComponent]
    });
    fixture = TestBed.createComponent(FondEcranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
