import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
    new Recipe ('Wiener schnitzel', 'Very tasty',
    'http://www.tportal.hr/ResourceManager/GetImage.aspx?imgId=728229&shotId=1&width=630&height=360', []),
    new Recipe ('Summer sallad', 'Okayish', 'https://www.femina.hr/images/articles/images/2012/salata_jaja_cijela.jpg', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
  	this.recipeSelected.emit(recipe);
  }

}
