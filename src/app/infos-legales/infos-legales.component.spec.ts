import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosLegalesComponent } from './infos-legales.component';

describe('InfosLegalesComponent', () => {
  let component: InfosLegalesComponent;
  let fixture: ComponentFixture<InfosLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
