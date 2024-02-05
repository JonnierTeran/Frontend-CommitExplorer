import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficCommitsComponentComponent } from './grafic-commits-component.component';

describe('GraficCommitsComponentComponent', () => {
  let component: GraficCommitsComponentComponent;
  let fixture: ComponentFixture<GraficCommitsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficCommitsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficCommitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
