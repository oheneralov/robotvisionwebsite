import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNNComponent } from './cnn.component';

describe('CNNComponent', () => {
  let component: CNNComponent;
  let fixture: ComponentFixture<CNNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
