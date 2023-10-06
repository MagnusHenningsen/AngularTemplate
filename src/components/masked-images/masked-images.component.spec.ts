import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedImagesComponent } from './masked-images.component';

describe('MaskedImagesComponent', () => {
  let component: MaskedImagesComponent;
  let fixture: ComponentFixture<MaskedImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaskedImagesComponent]
    });
    fixture = TestBed.createComponent(MaskedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
