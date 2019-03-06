import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosBaseComponent } from './infos-base.component';

describe('InfosBaseComponent', () => {
  let component: InfosBaseComponent;
  let fixture: ComponentFixture<InfosBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
