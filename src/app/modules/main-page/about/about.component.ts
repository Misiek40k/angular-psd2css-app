import { Component, OnInit } from '@angular/core';
import { ImageData } from '../../shared/content-box/content-box.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    imageData: ImageData = {
        src: 'assets/images/Shape-2.png',
        srcSet: 'assets/images/Shape-2.png 1x, assets/images/Shape-2@2x.png 2x',
        alt: 'Shape'
    };

    constructor() { }

    ngOnInit(): void {
    }

}
