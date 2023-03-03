import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  formGroup: FormGroup = new FormGroup({
    titre: new FormControl('', Validators.required),
    mot_cle: new FormControl('', Validators.required),
    video: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    contenu: new FormControl('', Validators.required),
  })

  constructor(private articleService: ArticleService, private router: Router) {}

  postArticle() {
    this.articleService.postArticle(this.formGroup?.value).subscribe((res) => {
      console.log(res.Message);
      this.router.navigate(['/home']);
    })
  }
}
