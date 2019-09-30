import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerLeftComponent } from './baner-left.component';

describe('BanerLeftComponent', () => {
  let component: BanerLeftComponent;
  let fixture: ComponentFixture<BanerLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanerLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
