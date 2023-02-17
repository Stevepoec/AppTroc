import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObjetsComponent } from './list-objets.component';

describe('ListObjetsComponent', () => {
  let component: ListObjetsComponent;
  let fixture: ComponentFixture<ListObjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListObjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListObjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
