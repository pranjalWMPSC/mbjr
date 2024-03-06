import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatUsComponent } from './contat-us.component';

describe('ContatUsComponent', () => {
  let component: ContatUsComponent;
  let fixture: ComponentFixture<ContatUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
