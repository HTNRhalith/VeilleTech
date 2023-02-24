import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PriceService } from './price.serve';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  data: any;

  constructor(private priceService: PriceService, private router: Router) { }

  ngOnInit() {
    this.priceService.price().subscribe((res) => {
      this.data = res
      // console.log(this.data)
    })
  }
}