import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  styleUrls: ['./home-page.scss']
})
export class HomePage {
   menuItem = signal<MenuItem[]>([
      {
        icon: 'create',
        label: 'Create',
        route: '/create',
      },
      {
        icon: 'notifications',
        label: 'Notifications',
        route: '/notifications',
        // icon para quando tiver notificação: notifications_active
      },
      {
        icon: 'settings',
        label: 'Settings',
        route: '/settings',
      },
      {
        icon: 'class',
        label: 'Collection',
        route: '/class',
      },
      {
        icon: 'home',
        label: 'Home',
        route: '/home',
      },
    ]);
}
