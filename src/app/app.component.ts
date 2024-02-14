import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeViewerComponent } from './theme-viewer/theme-viewer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ThemeViewerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'theme-tinker';
}
