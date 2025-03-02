import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdivbyidComponent } from './getdivbyid.component';

describe('GetdivbyidComponent', () => {
  let component: GetdivbyidComponent;
  let fixture: ComponentFixture<GetdivbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetdivbyidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdivbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
