import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe ('Wiener schnitzel', 'Very tasty',
    'http://www.tportal.hr/ResourceManager/GetImage.aspx?imgId=728229&shotId=1&width=630&height=360', []),
    new Recipe ('Summer sallad', 'Okayish', 'https://www.femina.hr/images/articles/images/2012/salata_jaja_cijela.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
