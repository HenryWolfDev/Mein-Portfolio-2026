import { Component } from '@angular/core';
import { UiButtonComponent } from '../../shared/ui-button/ui-button.component';
import { HEADER_CONTACT_BUTTON } from './header.buttons';
import { HEADER_PROJECTS_BUTTON } from './header.buttons';
import { HEADER_EPXERIENCE_BUTTON } from './header.buttons';

@Component({
  selector: 'app-header',
  imports: [UiButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  contactButton = HEADER_CONTACT_BUTTON;
  projectsButton = HEADER_PROJECTS_BUTTON;
  experienceButton = HEADER_EPXERIENCE_BUTTON;
}
