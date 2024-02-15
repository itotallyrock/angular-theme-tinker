import { Component } from '@angular/core';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { NgForOf } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ThemeViewerColorGridComponent } from './theme-viewer-color-grid/theme-viewer-color-grid.component';
import { ThemeViewerTypographyComponent } from './theme-viewer-typography/theme-viewer-typography.component';
import { MatDivider } from '@angular/material/divider';
import { ThemeViewerButtonsComponent } from './theme-viewer-buttons/theme-viewer-buttons.component';

@Component({
    selector: 'theme-viewer',
    templateUrl: './theme-viewer.component.html',
    styleUrls: ['./theme-viewer.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardTitle,
        MatCardHeader,
        ThemeViewerColorGridComponent,
        ThemeViewerTypographyComponent,
        MatCardContent,
        MatDivider,
        ThemeViewerButtonsComponent,
    ],
})
export class ThemeViewerComponent {

}
