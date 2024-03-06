import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintsComponent } from './footprints.component';

describe('FootprintsComponent', () => {
  let component: FootprintsComponent;
  let fixture: ComponentFixture<FootprintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootprintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
