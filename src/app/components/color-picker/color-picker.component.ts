import { Component, computed, effect, EventEmitter, input, Output, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-color-picker',
    standalone: true,
    imports: [
        MatButton,
        AsyncPipe,
        MatIcon,
    ],
    templateUrl: './color-picker.component.html',
    styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent {
    private readonly colorSignal = signal<string | null>(null);
    public readonly ariaLabel = input<string>('Pick a color', { alias: 'aria-label' });
    public readonly defaultColor = input<string>('#ffffff');
    public readonly color = computed(() => this.colorSignal() ?? this.defaultColor());
    public readonly contrastColor = computed(() => getContrastColor(this.color()));
    @Output('colorChanged')
    public readonly change = new EventEmitter<string>();

    constructor() {
        effect(() => this.change.next(this.color()));
    }

    protected colorChanged($event: Event): void {
        const target = $event.target as HTMLInputElement;
        this.colorSignal.set(target.value);
    }
}

function getContrastColor(hex: string): '#000000' | '#FFFFFF';
function getContrastColor(redOrHex: number, green: number, blue: number, alpha?: number): '#000000' | '#FFFFFF';
function getContrastColor(redOrHex: number | string, green?: number, blue?: number, alpha: number = 255): '#000000' | '#FFFFFF' {
    if (typeof redOrHex === 'string') {
        const hex = redOrHex.replace('#', '');
        const r = parseInt(hex.slice(0, 2), 16) / 255,
            g = parseInt(hex.slice(2, 4), 16) / 255,
            b = parseInt(hex.slice(4, 6), 16) / 255,
            a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
        return getContrastColor(r, g, b, a);
    }

    const brightness = redOrHex * 0.299 + green! * 0.587 + blue! * 0.114 + (1 - alpha) * 255;

    return brightness > 0.5 ? '#000000' : '#FFFFFF';
}