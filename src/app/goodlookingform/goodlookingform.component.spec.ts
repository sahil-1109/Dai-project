import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodlookingformComponent } from './goodlookingform.component';

describe('GoodlookingformComponent', () => {
  let component: GoodlookingformComponent;
  let fixture: ComponentFixture<GoodlookingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodlookingformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodlookingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
