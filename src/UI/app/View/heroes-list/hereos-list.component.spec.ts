import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereosListComponent } from './hereos-list.component';

describe('HereosListComponent', () => {
  let component: HereosListComponent;
  let fixture: ComponentFixture<HereosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HereosListComponent]
    });
    fixture = TestBed.createComponent(HereosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
