import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobarComponent } from './toobar.component';

describe('ToobarComponent', () => {
  let component: ToobarComponent;
  let fixture: ComponentFixture<ToobarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToobarComponent]
    });
    fixture = TestBed.createComponent(ToobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
