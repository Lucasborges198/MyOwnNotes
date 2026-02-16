import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../../components/navbar/navbar';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';
import { CardCreation } from '../../components/card-creation/card-creation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  imports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    TextFieldModule,
    AutosizeModule,
    FormsModule,
    CardCreation,
  ],
  styleUrls: ['./home-page.scss'],
})
export class HomePage {
  constructor(public cdr: ChangeDetectorRef) {}
  public content = '';
  public tag = '';
  public isLoading = false;
  public openModal = false;

  public inventory: { title: string; content: string; tag: string }[] = [];

  hovering = false;
  noteText = '';

  expandedIndex: number | null = null;
  showModal = false;
  noteToDelete: number | null = null;

  enviarNota() {
    const texto = this.noteText.trim();
    if (texto) {
      const content = texto;
      const tag = ''; // ajuste se quiser capturar tags
      const title = '';
      const nota = { title, content, tag };

      this.inventory.push(nota);

      this.noteText = ''; // limpa campo após envio
    }
  }
  onKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault(); // evita quebra de linha
      this.enviarNota();
    }
  }

  deleteNote(index: number) {
    this.noteToDelete = this.inventory.length - 1 - index;
    if (this.noteToDelete !== null) {
      this.inventory.splice(this.noteToDelete, 1);
      this.noteToDelete = null;
      this.showModal = false;
      this.cdr.detectChanges();
    }
  }

  public modalOnChange(type: boolean) {
    this.openModal = type;
  }

  openCreateNoteModal(): void {
    this.openModal = true;
  }

  public setNewCard(cardContent: any) {
    if (cardContent) {
      this.inventory.push(cardContent);
      this.openModal = false;
    }
  }
}
