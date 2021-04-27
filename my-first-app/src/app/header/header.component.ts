import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RecipesService } from '../recipes/recipes.service';
import { NavigationType } from '../routing';
import { RecipesAdaptorService } from '../shared/recipes-adaptor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  NavigationType = NavigationType;

  constructor(
    private recipesAdaptor: RecipesAdaptorService,
    private recipesService: RecipesService,
    private authService: AuthService
  ) {}

  fetch() {
    this.recipesAdaptor.fetch().subscribe((recipes) => {
      this.recipesService.loadRecipes(recipes);
    });
  }
  save() {
    const recipes = this.recipesService.getRecipes();
    this.recipesAdaptor.save(recipes).subscribe();
  }

  logout() {
    this.authService.logOut();
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  get user() {
    return this.authService.getPrincipal().email;
  }
}
