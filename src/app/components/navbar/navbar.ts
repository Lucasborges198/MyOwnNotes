import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from 'express';


export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  isCollapsed = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  menuItem = signal<MenuItem[]>([
    { icon: 'create', label: 'Create', route: '/create' },
    { icon: 'notifications', label: 'Notifications', route: '/notifications' },
    { icon: 'settings', label: 'Settings', route: '/settings' },
    { icon: 'class', label: 'Collection', route: '/class' },
    { icon: 'home', label: 'Home', route: '/' },
  ]);
}
