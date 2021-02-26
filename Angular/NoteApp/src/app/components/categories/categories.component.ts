import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { Language } from '../../../languages/language.service';
import { DialogService } from '../../shared/services/dialog.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent {

  categories: Observable<Category[]>;

  constructor(private _categories: CategoriesService,
              private _dialog: DialogService,
              public _language: Language) {
    this.categories = this._categories.findAll();
  }

  newCategory(): void {
    const dialogRef = this._dialog.getInputDialog(this._language.selectedLanguage.dialog.categoryCreate);
    dialogRef.afterClosed().subscribe(name => {
      this._categories.create({name}).subscribe();
      location.reload();
    });
  }

  changeName(category: Category, name: string): void {
    if(category.name !== name) {
      const dialogRef = this._dialog.getConfirmationDialog(this._language.selectedLanguage.dialog.save);
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this._categories.update(category.id, {name}).subscribe();
          location.reload();
        }
      });
    }    
  }

  deleteCategory(category: Category): void {
    const dialogRef = this._dialog.getConfirmationDialog(this._language.selectedLanguage.dialog.categoryDelete);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this._categories.remove(category.id).subscribe();
        location.reload();
      }
    });
  }
}
