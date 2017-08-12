import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedBookComponent } from './reserved-book.component';

describe('ReservedBookComponent', () => {
  let component: ReservedBookComponent;
  let fixture: ComponentFixture<ReservedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
