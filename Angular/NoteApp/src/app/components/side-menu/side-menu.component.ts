import { Component, OnInit } from '@angular/core';
import { Category } from '../../core/models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { Language } from '../../../languages/language.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {
  categories: Category[] = [];

  constructor(private _categories: CategoriesService,
              public _language: Language) {}

  ngOnInit(): void {
    this._categories.findAll().subscribe((response)=> {
      this.categories = response;      
    });
  }
}
