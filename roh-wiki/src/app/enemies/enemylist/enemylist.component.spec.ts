import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemylistComponent } from './enemylist.component';

describe('EnemylistComponent', () => {
  let component: EnemylistComponent;
  let fixture: ComponentFixture<EnemylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
