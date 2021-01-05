import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTitleComponent } from './section-title/section-title.component';
import { ContentBoxComponent } from './content-box/content-box.component';

@NgModule({
    declarations: [
        SectionTitleComponent,
        ContentBoxComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        SectionTitleComponent,
        ContentBoxComponent
    ]
})
export class SharedModule {}
