import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeViewerComponent } from './theme-viewer/theme-viewer.component';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { MatIcon } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';
import { getPreviousTheme, ThemeToggleComponent, ThemeType } from './components/theme-toggle/theme-toggle.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet, ThemeViewerComponent, MatButton, MatCard, MatCardTitle, MatCardHeader, MatCardFooter,
        ColorPickerComponent, MatIcon, ThemeToggleComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    protected readonly document = inject(DOCUMENT);

    protected updateColor(color: string, palette: 'accent' | 'warn' | 'error' | 'success'): void {
        this.document.documentElement.style.setProperty(`--theme-${palette}`, color);
    }

    public updateTheme(theme: ThemeType): void {
        this.document.body.classList.remove(`${getPreviousTheme(theme)}-themed`);
        this.document.body.classList.add(`${theme}-themed`);
    }
}
