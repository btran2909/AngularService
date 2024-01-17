import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public loadingService: LoadingService,
    private primeNgConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }
}
