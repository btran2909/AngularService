import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEditorDetailComponent } from './email-editor-detail.component';

describe('EmailEditorDetailComponent', () => {
  let component: EmailEditorDetailComponent;
  let fixture: ComponentFixture<EmailEditorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailEditorDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailEditorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
