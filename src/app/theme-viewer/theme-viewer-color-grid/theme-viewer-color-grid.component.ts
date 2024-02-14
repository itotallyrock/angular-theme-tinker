import { Component } from '@angular/core';

@Component({
    selector: 'theme-viewer-color-grid',
    standalone: true,
    imports: [],
    templateUrl: './theme-viewer-color-grid.component.html',
    styleUrl: './theme-viewer-color-grid.component.scss',
})
export class ThemeViewerColorGridComponent {
    protected readonly colorVariants = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'] as const;
    protected readonly colorPalettes = ['Primary', 'Accent', 'Warn', 'Success', 'Error'] as const;
}
