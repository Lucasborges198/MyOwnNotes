import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { SettingsApp } from './components/settings-app/settings-app';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'settings', component: SettingsApp }
];
