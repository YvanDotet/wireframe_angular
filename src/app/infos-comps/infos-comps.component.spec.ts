import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCompsComponent } from './infos-comps.component';

describe('InfosCompsComponent', () => {
  let component: InfosCompsComponent;
  let fixture: ComponentFixture<InfosCompsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosCompsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
