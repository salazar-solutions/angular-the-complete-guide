import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesAdaptorService {
  private url =
    'https://angular-complete-guide-e5865-default-rtdb.firebaseio.com/recipes.json';
  constructor(private client: HttpClient) {}
  save(recipes: Recipe[]) {
    return this.client.put<Recipe[]>(this.url, recipes);
  }
  fetch() {
    return this.client.get<Recipe[]>(`${this.url}`);
  }
}
