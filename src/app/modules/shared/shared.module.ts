import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';

@NgModule({
    declarations: [SectionTitleComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        SectionTitleComponent,
    ]
})
export class SharedModule {}
