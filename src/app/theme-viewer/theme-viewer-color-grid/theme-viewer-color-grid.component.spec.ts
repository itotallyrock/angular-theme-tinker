import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeViewerColorGridComponent } from './theme-viewer-color-grid.component';

describe('ThemeViewerColorGridComponent', () => {
    let component: ThemeViewerColorGridComponent;
    let fixture: ComponentFixture<ThemeViewerColorGridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeViewerColorGridComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ThemeViewerColorGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
