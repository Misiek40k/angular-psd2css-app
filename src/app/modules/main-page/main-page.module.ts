import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        HeroComponent,
        MainPageComponent,
        AboutComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        SharedModule
    ]
})
export class MainPageModule {}
