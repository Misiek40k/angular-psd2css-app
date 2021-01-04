import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        SharedModule,
        NgbModule
    ]
})
export class CoreModule {}
