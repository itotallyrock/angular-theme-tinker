import { Component } from '@angular/core';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { NgForOf } from '@angular/common';
import { MatCard, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ThemeViewerColorGridComponent } from './theme-viewer-color-grid/theme-viewer-color-grid.component';

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
    ],
})
export class ThemeViewerComponent {

}
