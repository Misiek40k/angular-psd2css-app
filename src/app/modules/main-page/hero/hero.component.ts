import { Component, OnInit } from '@angular/core';
import { ImageData } from '../../shared/content-box/content-box.component';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    imageData: ImageData = {
        src: 'assets/images/Shape-1.png',
        srcSet: 'assets/images/Shape-1.png 1x, assets/images/Shape-1@2x.png 2x',
        alt: 'Shape'
    };

    constructor() { }

    ngOnInit(): void {}
}
