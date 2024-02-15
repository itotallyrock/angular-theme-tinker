import { Component, computed, effect, EventEmitter, input, InputSignal, Output, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

export type ThemeType = 'light' | 'dark';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [
        MatButton,
        MatIcon,
        MatIconButton,
    ],
    templateUrl: './theme-toggle.component.html',
    styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
    public readonly default: InputSignal<ThemeType> = input<ThemeType>('dark');
    private readonly themeSignal = signal<ThemeType | null>(null);
    public readonly theme = computed(() => this.themeSignal() ?? this.default());

    @Output() public readonly themeChanged = new EventEmitter<'light' | 'dark'>();

    constructor() {
        effect(() => this.themeChanged.next(this.theme()));
    }

    protected nextTheme(): void {
        this.themeSignal.set(getNextTheme(this.theme()));
    }
}

export function getPreviousTheme(theme: ThemeType): ThemeType {
    return getNextTheme(theme);
}

export function getNextTheme(theme: ThemeType): ThemeType {
    return theme === 'light' ? 'dark' : 'light';
}