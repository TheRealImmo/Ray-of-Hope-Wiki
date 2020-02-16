import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackstoryEditComponent } from './backstory-edit.component';

describe('BackstoryEditComponent', () => {
  let component: BackstoryEditComponent;
  let fixture: ComponentFixture<BackstoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackstoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackstoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
