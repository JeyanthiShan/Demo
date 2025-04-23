import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-cards',
  standalone: true,
  templateUrl: './icon-cards.component.html',
  styleUrl: './icon-cards.component.css',
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    CommonModule
  ]
})
export class IconCardsComponent {
  selected: string = 'all';
  extensions = [
    {
      icon: 'assets/logo-devlens.svg',
      name: 'Extension One',
      description: 'This is the first extension.',
      enabled: true
    },
    {
      icon: 'assets/logo-speed-boost.svg',
      name: 'Extension Two',
      description: 'This is the second extension.',
      enabled: false
    },
    {
      icon: 'assets/logo-json-wizard.svg',
      name: 'Extension Three',
      description: 'This is the third extension.',
      enabled: true
    },
    {
      icon: 'assets/logo-tab-master-pro.svg',
      name: 'Extension Four',
      description: 'This is the fourth extension.',
      enabled: true
    },
    {
      icon: 'assets/logo-viewport-buddy.svg',
      name: 'Extension Five',
      description: 'This is the fifth extension.',
      enabled: false
    },
    {
      icon: 'assets/logo-markup-notes.svg',
      name: 'Extension Six',
      description: 'This is the sixth extension.',
      enabled: true
    },
    {
      icon: 'assets/logo-grid-guides.svg',
      name: 'Extension Seven',
      description: 'This is the seventh extension.',
      enabled: true
    },
    {
      icon: 'assets/logo-palette-picker.svg',
      name: 'Extension Eight',
      description: 'This is the eighth extension.',
      enabled: false
    },
    {
      icon: 'assets/logo-link-checker.svg',
      name: 'Extension Nine',
      description: 'This is the ninth extension.',
      enabled: true
    },
    {
      icon: 'assets/logo-dom-snapshot.svg',
      name: 'Extension Ten',
      description: 'This is the tenth extension.',
      enabled: false
    },
    {
      icon: 'assets/logo-console-plus.svg',
      name: 'Extension eleven',
      description: 'This is the eleventh extension.',
      enabled: true
    },
    {
      icon: 'assets/logo-style-spy.svg',
      name: 'Extension Twelve',
      description: 'This is the twelth extension.',
      enabled: true
    }
  ];

  removeExtension(extension: any) {
    this.extensions = this.extensions.filter(e => e !== extension);
  }
  selectStatus(status: string) {
    this.selected = status;
  }
  get filteredExtensions() {
    if (this.selected === 'all') {
      return this.extensions;
    } else if (this.selected === 'active') {
      return this.extensions.filter(ext => ext.enabled);
    } else {
      return this.extensions.filter(ext => !ext.enabled);
    }
  }
  
}
