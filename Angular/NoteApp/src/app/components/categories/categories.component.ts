import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent {

  categories: Observable<Category[]>;

  constructor(private _categories: CategoriesService) {
    this.categories = this._categories.findAll();
  }

  changeName(category: Category, name: string): void {
    if(category.name !== name){
      this._categories.update(category.id, {name}).subscribe();
    }    
  }

  deleteCategory(category: Category): void {
    this._categories.remove(category.id).subscribe();
  }

}
