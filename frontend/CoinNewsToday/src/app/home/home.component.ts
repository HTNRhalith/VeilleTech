import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.serve';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: any;
  our_data: any;
  nb_art = [0,1,2,3,4,5,6,9,14,54];

  constructor(private homeService: HomeService, public router: Router) { }

  ngOnInit() {
    this.homeService.news().subscribe((res) => {
      this.data = res

    })

    this.homeService.homearticle().subscribe((res) => {
      this.our_data = res;
      console.log(this.our_data)
    })
  }
}
