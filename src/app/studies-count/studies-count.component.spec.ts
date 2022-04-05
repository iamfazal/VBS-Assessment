import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesCountComponent } from './studies-count.component';

describe('StudiesCountComponent', () => {
  let component: StudiesCountComponent;
  let fixture: ComponentFixture<StudiesCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
