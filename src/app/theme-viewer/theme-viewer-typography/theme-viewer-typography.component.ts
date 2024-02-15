import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'theme-viewer-typography',
    standalone: true,
    imports: [
        MatIcon,
        MatTooltip,
    ],
    templateUrl: './theme-viewer-typography.component.html',
    styleUrl: './theme-viewer-typography.component.scss',
})
export class ThemeViewerTypographyComponent {

}
