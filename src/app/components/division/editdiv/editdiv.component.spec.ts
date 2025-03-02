import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdivComponent } from './editdiv.component';

describe('EditdivComponent', () => {
  let component: EditdivComponent;
  let fixture: ComponentFixture<EditdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditdivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
