import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPretsComponent } from './list-prets.component';

describe('ListPretsComponent', () => {
  let component: ListPretsComponent;
  let fixture: ComponentFixture<ListPretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPretsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
