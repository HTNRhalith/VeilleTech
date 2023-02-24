import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricesComponent } from './prices/prices.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricesComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
