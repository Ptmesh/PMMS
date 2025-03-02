import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedivComponent } from './deletediv.component';

describe('DeletedivComponent', () => {
  let component: DeletedivComponent;
  let fixture: ComponentFixture<DeletedivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletedivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
