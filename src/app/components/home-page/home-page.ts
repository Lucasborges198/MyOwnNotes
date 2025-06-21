import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from '../navbar/navbar';

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
  ],
  styleUrls: ['./home-page.scss'],
})
export class HomePage {

}

