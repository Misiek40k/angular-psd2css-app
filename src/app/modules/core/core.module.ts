import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        SharedModule,
        NgbModule,
        NgxPageScrollCoreModule
    ]
})
export class CoreModule {}
