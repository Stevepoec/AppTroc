import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSearchPretComponent } from './list-search-pret.component';

describe('ListSearchPretComponent', () => {
  let component: ListSearchPretComponent;
  let fixture: ComponentFixture<ListSearchPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSearchPretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSearchPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
