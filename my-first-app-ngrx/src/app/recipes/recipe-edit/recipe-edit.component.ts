import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipesService } from '../recipes.service';

enum Mode {
  create,
  edit,
}

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  form = this.fb.group({
    name: [],
    description: [],
    imagePath: [],
    ingredients: this.fb.array([]),
  });

  private id: number;
  private mode: Mode;

  get controls(): AbstractControl[] {
    return (<FormArray>this.form.get('ingredients')).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.processParams(params);
    });
  }

  private processParams(params: Params) {
    this.id = params['id'];
    this.mode = this.id ? Mode.edit : Mode.create;
    console.log('Mode: [%o]', this.mode);
    if (this.mode == Mode.edit) {
      const recipe = this.recipesService.getRecipe(this.id);
      this.processIngredients(recipe);
      this.form.setValue(recipe);
    }
  }

  processIngredients({ ingredients }: { ingredients: Ingredient[] }) {
    if (!ingredients) return;

    const formIngredients: FormArray = this.form.get(
      'ingredients'
    ) as FormArray;
    formIngredients.clear();

    ingredients.forEach(() =>
      formIngredients.push(this.fb.group({ name: [], amount: [] }))
    );
  }

  onSubmit() {
    const { value } = this.form;
    if (this.mode == Mode.create) {
      this.recipesService.addRecipe(value);
    }

    if (this.mode == Mode.edit) {
      this.recipesService.editRecipe(value, this.id);
    }
    this.onClose();
  }

  onClose() {
    this.form.reset();
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    const formIngredients: FormArray = this.form.get(
      'ingredients'
    ) as FormArray;
    formIngredients.removeAt(index);
  }

  onAddIngredient() {
    const formIngredients: FormArray = this.form.get(
      'ingredients'
    ) as FormArray;

    formIngredients.push(this.fb.group({ name: [], amount: [] }));
  }
}
