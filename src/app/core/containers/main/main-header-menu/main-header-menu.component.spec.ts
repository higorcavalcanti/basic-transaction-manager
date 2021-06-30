import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderMenuComponent } from './main-header-menu.component';

describe('MainHeaderMenuComponent', () => {
  let component: MainHeaderMenuComponent;
  let fixture: ComponentFixture<MainHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open menu', () => {
    expect(component.menuOpen).toBeFalse();
    component.openMenu();
    expect(component.menuOpen).toBeTrue();
  });

  it('should close menu', () => {
    component.menuOpen = true;
    expect(component.menuOpen).toBeTrue();
    component.closeMenu();
    expect(component.menuOpen).toBeFalse();
  });
});
