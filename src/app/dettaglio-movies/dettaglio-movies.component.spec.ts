import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioMoviesComponent } from './dettaglio-movies.component';

describe('DettaglioMoviesComponent', () => {
  let component: DettaglioMoviesComponent;
  let fixture: ComponentFixture<DettaglioMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioMoviesComponent]
    });
    fixture = TestBed.createComponent(DettaglioMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
