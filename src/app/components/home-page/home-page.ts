import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../navbar/navbar';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';

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
  ],
  styleUrls: ['./home-page.scss'],
})
export class HomePage {
  hovering = false;
  noteText = '';

  enviarNota() {
    const texto = this.noteText.trim();
    if (texto) {
      console.log('Nota enviada:', texto);
      // Aqui você pode: salvar em array, enviar para backend, etc.
      this.noteText = ''; // limpa campo após envio
    }
  }
  onKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault(); // evita quebra de linha
      this.enviarNota();
    }
  }
}
