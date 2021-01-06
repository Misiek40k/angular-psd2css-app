import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ImageData } from '../../shared/content-box/content-box.component';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

enum ScrollDirection {
    LEFT,
    RIGHT
}

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    ScrollDirection = ScrollDirection;

    @ViewChild('scrollContainer') scrollContainer: ElementRef;
    @ViewChild('scrollButtonLeft') scrollButtonLeft: ElementRef;
    @ViewChild('scrollButtonRight') scrollButtonRight: ElementRef;
    currentSliderScrollIndex = 0;

    imageData: ImageData = {
        src: 'assets/images/Shape-1.png',
        srcSet: 'assets/images/Shape-1.png 1x, assets/images/Shape-1@2x.png 2x',
        alt: 'Shape'
    };

    constructor(
        private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any,
    ) { }

    ngOnInit(): void {}

    scrollSlider(direction: ScrollDirection): void {
        switch (direction) {
            case ScrollDirection.LEFT:
                if (this.currentSliderScrollIndex > 1) {
                    this.currentSliderScrollIndex -= 1;
                }
                break;
            case ScrollDirection.RIGHT:
                if (this.currentSliderScrollIndex < 3) {
                    this.currentSliderScrollIndex += 1;
                }
                break;
        }
        this.scroll(this.scrollContainer.nativeElement, 400, this.currentSliderScrollIndex, 'scrollItem');
    }

    private scroll(container, duration: number, index: number, targetId: string): void {
        const pageScrollInstance: PageScrollInstance = this.pageScrollService.create({
            document: this.document,
            scrollTarget: '#' + targetId + '-' + index,
            scrollViews: [container],
            duration,
            scrollOffset: 25,
            verticalScrolling: false,
        });
        this.pageScrollService.start(pageScrollInstance);
    }
}
