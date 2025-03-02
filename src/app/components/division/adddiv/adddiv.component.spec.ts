import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddivComponent } from './adddiv.component';

describe('AdddivComponent', () => {
  let component: AdddivComponent;
  let fixture: ComponentFixture<AdddivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdddivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
