import { Component, Input, OnInit } from '@angular/core';
import { ButtonConfig } from './button.config';
import { NgIf } from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
})
export class UiButtonComponent implements OnInit {
  @Input() config!: ButtonConfig;

  iconPath!: string;

  IconDictionary = {
    mail: 'assets/icons/mail-outline.svg',
    easel: '/assets/icons/easel-outline.svg',
    'code-slash': '/assets/icons/code-slash-outline.svg',
  };

  ngOnInit() {
    if (this.config?.icon) {
      this.iconPath = this.IconDictionary[this.config.icon];
    }
  }
}
