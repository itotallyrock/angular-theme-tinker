import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeViewerComponent } from './theme-viewer/theme-viewer.component';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ThemeViewerComponent, MatInput, MatFormField],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'theme-tinker';
    protected readonly document = document;

    protected updateAccentColor($event: Event): void {
        const target = $event.target;
        debugger;
        if (target instanceof HTMLInputElement)
            document.documentElement.style.setProperty('--theme-accent', target.value);
    }
}
