import { Component, Input, OnInit } from '@angular/core';

export interface ImageData {
    src: string;
    srcSet: string;
    alt: string;
}

@Component({
    selector: 'app-content-box',
    templateUrl: './content-box.component.html',
    styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent implements OnInit {

    @Input() title: string;
    @Input() text: string;
    @Input() isSliderBoxItem: boolean;
    @Input() imageData: ImageData;

    constructor() { }

    ngOnInit(): void {}
}
