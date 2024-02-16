import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: IProduct[];
  responsiveOptions: any[];
  layout: 'list' | 'grid' = 'grid';
  loading: boolean = false;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }

  load() {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
  }

  goToProductDetail(product: IProduct) {
    this.router.navigate([`/product-detail/${product.id}`]);
  }
}
