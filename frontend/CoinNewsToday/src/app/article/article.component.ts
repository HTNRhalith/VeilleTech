import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public id: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // juste tester getting le id de la route
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
