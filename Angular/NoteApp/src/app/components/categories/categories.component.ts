import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { Language } from '../../../languages/language.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent {

  categories: Observable<Category[]>;

  constructor(private _categories: CategoriesService,
              public _language: Language) {
    this.categories = this._categories.findAll();
  }

  changeName(category: Category, name: string): void {
    if(category.name !== name){
      this._categories.update(category.id, {name}).subscribe();
      location.reload()
    }    
  }

  deleteCategory(category: Category): void {
    this._categories.remove(category.id).subscribe();
  }

}
