import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsApp } from './settings-app';

describe('SettingsApp', () => {
  let component: SettingsApp;
  let fixture: ComponentFixture<SettingsApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
