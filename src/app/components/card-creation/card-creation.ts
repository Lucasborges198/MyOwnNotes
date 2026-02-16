import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-card-creation',
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatRadioModule,
  ],
  templateUrl: './card-creation.html',
  styleUrl: './card-creation.scss',
})
export class CardCreation {
  noteForm: FormGroup;
  public cardType = ['casual', 'importante', 'crucial'];
  @Input() opened: boolean = false;
  @Output() cardContent = new EventEmitter<{
    title: string;
    content: string;
    tag: string;
    cardTagType: string
  }>();
  @Output() close = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      tag: [''],
      content: ['', Validators.required],
      cardTagType: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  onCancel(): void {
    this.close.emit(false);
  }

  onSave(): void {
    if (this.noteForm.valid) {
      this.cardContent.emit(this.noteForm.value);
      this.noteForm.reset();
      this.close.emit(false);
    }
  }
}
