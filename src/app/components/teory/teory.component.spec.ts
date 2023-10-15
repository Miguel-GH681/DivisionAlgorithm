import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoryComponent } from './teory.component';

describe('TeoryComponent', () => {
  let component: TeoryComponent;
  let fixture: ComponentFixture<TeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
