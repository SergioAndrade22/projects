import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'notes/view/:value', component: NotesComponent },
    { path: 'notes/create', component: NewNoteComponent },
    { path: 'notes/edit/:id', component: NewNoteComponent },
    { path: 'category/:name/:id', component: NotesComponent },
    { path: 'categories/manage', component: CategoriesComponent },
];