import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpersComponent } from './yelpers.component';

describe('YelpersComponent', () => {
  let component: YelpersComponent;
  let fixture: ComponentFixture<YelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
