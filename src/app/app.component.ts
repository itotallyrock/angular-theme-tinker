import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeViewerComponent } from './theme-viewer/theme-viewer.component';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ThemeViewerComponent, MatButton],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'theme-tinker';
    protected readonly document = document;

    protected updateColor($event: Event, color: 'accent' | 'warn' | 'error' | 'success'): void {
        const target = $event.target;
        debugger;
        if (target instanceof HTMLInputElement)
            document.documentElement.style.setProperty(`--theme-${color}`, target.value);
    }
}
