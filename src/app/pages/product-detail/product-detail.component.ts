import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  images: any[] | undefined;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  formGroup!: FormGroup;
  colorOptions: any[] = [
    { label: 'Đen', value: 'black' },
    { label: 'Màu cam đậm', value: 'dark-orange' },
    { label: 'Xám', value: 'gray' },
    { label: 'Màu xanh hoa ngô đồng', value: 'cornflower-blue' },
  ];
  sizeOptions: any[] = [
    { label: 'S', value: 's' },
    { label: 'M', value: 'm' },
    { label: 'L', value: 'l' },
    { label: 'XL', value: 'xl' },
    { label: '2X', value: '2x' },
    { label: '3X', value: '3x' },
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));

    this.formGroup = new FormGroup({
      color: new FormControl('black'),
      size: new FormControl('s'),
      quantity: new FormControl(1),
    });
  }

  getLabelOption(options: any[], value: string) {
    const option = options.find((o) => o.value === value);
    if (!option) return '';
    return option.label;
  }
}
