import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeImageComponent } from './include-image.component';

describe('IncludeImageComponent', () => {
  let component: IncludeImageComponent;
  let fixture: ComponentFixture<IncludeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
