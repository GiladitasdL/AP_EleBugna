import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSocilesComponent } from './redes-sociles.component';

describe('RedesSocilesComponent', () => {
  let component: RedesSocilesComponent;
  let fixture: ComponentFixture<RedesSocilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSocilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSocilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
