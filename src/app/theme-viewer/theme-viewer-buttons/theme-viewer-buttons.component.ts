import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'theme-viewer-buttons',
    templateUrl: './theme-viewer-buttons.component.html',
    styleUrls: ['./theme-viewer-buttons.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatDivider],
})
export class ThemeViewerButtonsComponent { }
