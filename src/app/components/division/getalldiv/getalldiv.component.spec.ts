import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldivComponent } from './getalldiv.component';

describe('GetalldivComponent', () => {
  let component: GetalldivComponent;
  let fixture: ComponentFixture<GetalldivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetalldivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalldivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
