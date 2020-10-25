import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDirectiveComponent } from './ngx-directive.component';

describe('NgxDirectiveComponent', () => {
  let component: NgxDirectiveComponent;
  let fixture: ComponentFixture<NgxDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
