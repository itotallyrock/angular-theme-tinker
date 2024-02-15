import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeViewerTypographyComponent } from './theme-viewer-typography.component';

describe('ThemeViewerTypographyComponent', () => {
    let component: ThemeViewerTypographyComponent;
    let fixture: ComponentFixture<ThemeViewerTypographyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ThemeViewerTypographyComponent],
        })
            .compileComponents();

        fixture = TestBed.createComponent(ThemeViewerTypographyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
