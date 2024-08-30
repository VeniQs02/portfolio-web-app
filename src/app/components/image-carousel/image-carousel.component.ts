import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'image-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  @Input() project: string = '';
  @Input({transform: numberAttribute}) quantity: number = 0;
  @Input({transform: numberAttribute}) visible: number = 1;
  @Input({transform: numberAttribute}) scroll: number = 1;
  images: string[] = [];

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    for (let i = 1; i <= this.quantity; i++) {
      this.images.push(`/assets/${this.project}/image${i}.png`);
    }
  }
}
