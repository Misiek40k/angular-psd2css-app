import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './modules/core/core.module';
import { MainPageModule } from './modules/main-page/main-page.module';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        MainPageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
