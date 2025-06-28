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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
    MatDialogModule
  ],
  styleUrls: ['./home-page.scss'],
})
export class HomePage {
  constructor(public dialog: MatDialog, public cdr: ChangeDetectorRef) {}
  public content = '';
  public tag = '';
  public isLoading = false;

  inventory: { content: string; tag: string }[] = [];

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

      const nota = { content, tag };

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
}
