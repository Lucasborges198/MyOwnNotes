import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, CommonModule],
  styleUrls: ['./home-page.scss']
})
export class HomePage {
  opened = false;
  events: string[] = [];

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public openMenu(): void {
    this.opened = true;
  }
}
